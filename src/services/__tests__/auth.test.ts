import { beforeEach, describe, expect, it } from "vitest";

import { DEFAULT_HEADERS } from "@/constants/service";
import { login, logout, register } from "@/services";
import {
  AUTH_SERVICE_MOCK,
  HOST_MOCK,
  getMockOfErrorResponse,
  getMockOfLoginBody,
  getMockOfRegisterBody,
} from "@/test/factory";
import { getFetchCall, mockFetch, stubServiceEnv } from "@/test/utils/fetch";

describe("auth services", () => {
  beforeEach(() => {
    stubServiceEnv();
  });

  describe("login", () => {
    it("should post the credentials and include cookies", async () => {
      const fetchMock = mockFetch({});
      const body = getMockOfLoginBody();

      await login(body);

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${AUTH_SERVICE_MOCK}/login`);
      expect(init.method).toBe("POST");
      expect(init.credentials).toBe("include");
      expect(init.headers).toEqual(DEFAULT_HEADERS);
      expect(JSON.parse(init.body as string)).toEqual(body);
    });

    it("should throw the error body returned by the API", async () => {
      const error = getMockOfErrorResponse();
      mockFetch(error, 401);

      await expect(login(getMockOfLoginBody())).rejects.toEqual(error);
    });
  });

  describe("logout", () => {
    it("should post to the logout endpoint and include cookies", async () => {
      const fetchMock = mockFetch("");

      await expect(logout(null)).resolves.toBeUndefined();

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${AUTH_SERVICE_MOCK}/logout`);
      expect(init.method).toBe("POST");
      expect(init.credentials).toBe("include");
    });

    it("should throw the error body returned by the API", async () => {
      const error = getMockOfErrorResponse();
      mockFetch(error, 500);

      await expect(logout(null)).rejects.toEqual(error);
    });
  });

  describe("register", () => {
    it("should post the new customer", async () => {
      const fetchMock = mockFetch({});
      const body = getMockOfRegisterBody();

      await register(body);

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${AUTH_SERVICE_MOCK}/register`);
      expect(init.method).toBe("POST");
      expect(init.headers).toEqual(DEFAULT_HEADERS);
      expect(JSON.parse(init.body as string)).toEqual(body);
    });

    it("should throw an Error with the response text", async () => {
      mockFetch("E-mail já cadastrado", 409);

      await expect(register(getMockOfRegisterBody())).rejects.toThrow(
        "E-mail já cadastrado"
      );
    });
  });
});
