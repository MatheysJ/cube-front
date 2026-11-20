import { beforeEach, describe, expect, it } from "vitest";

import { DEFAULT_HEADERS } from "@/constants/service";
import { getUserInfo } from "@/services";
import { CUSTOMER_SERVICE_MOCK, HOST_MOCK, getMockOfUserData } from "@/test/factory";
import { getFetchCall, mockFetch, stubServiceEnv } from "@/test/utils/fetch";

describe("customer services", () => {
  beforeEach(() => {
    stubServiceEnv();
  });

  describe("getUserInfo", () => {
    it("should return the logged user data", async () => {
      const user = getMockOfUserData();
      const fetchMock = mockFetch(user);

      const response = await getUserInfo();

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${CUSTOMER_SERVICE_MOCK}`);
      expect(init.method).toBe("GET");
      expect(init.credentials).toBe("include");
      expect(init.headers).toEqual(DEFAULT_HEADERS);
      expect(response).toEqual(user);
    });

    it("should throw an Error with the response text", async () => {
      mockFetch("Unauthorized", 401);

      await expect(getUserInfo()).rejects.toThrow("Unauthorized");
    });
  });
});
