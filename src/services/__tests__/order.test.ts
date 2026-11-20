import { beforeEach, describe, expect, it } from "vitest";

import { DEFAULT_HEADERS } from "@/constants/service";
import { getOrders, subimitOrder } from "@/services";
import { getOrderById } from "@/services/order/getOrderById";
import {
  HOST_MOCK,
  ORDER_SERVICE_MOCK,
  getMockOfOrder,
  getMockOfOrderBody,
} from "@/test/factory";
import { getFetchCall, mockFetch, stubServiceEnv } from "@/test/utils/fetch";

describe("order services", () => {
  beforeEach(() => {
    stubServiceEnv();
  });

  describe("subimitOrder", () => {
    it("should post the order and return the invoice url", async () => {
      const fetchMock = mockFetch({ invoiceUrl: getMockOfOrder().invoiceUrl });
      const body = getMockOfOrderBody();

      const response = await subimitOrder(body);

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${ORDER_SERVICE_MOCK}`);
      expect(init.method).toBe("POST");
      expect(init.credentials).toBe("include");
      expect(init.headers).toEqual(DEFAULT_HEADERS);
      expect(JSON.parse(init.body as string)).toEqual(body);
      expect(response.invoiceUrl).toBe(getMockOfOrder().invoiceUrl);
    });

    it("should throw an Error with the response text", async () => {
      mockFetch("Produto não encontrado", 404);

      await expect(subimitOrder(getMockOfOrderBody())).rejects.toThrow(
        "Produto não encontrado"
      );
    });
  });

  describe("getOrders", () => {
    it("should return the orders of the logged user", async () => {
      const orders = [getMockOfOrder()];
      const fetchMock = mockFetch(orders);

      const response = await getOrders();

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${ORDER_SERVICE_MOCK}`);
      expect(init.credentials).toBe("include");
      expect(response).toEqual(orders);
    });

    it("should throw an Error with the response text", async () => {
      mockFetch("Unauthorized", 401);

      await expect(getOrders()).rejects.toThrow("Unauthorized");
    });
  });

  describe("getOrderById", () => {
    it("should request the order by id", async () => {
      const order = getMockOfOrder();
      const fetchMock = mockFetch(order);

      const response = await getOrderById(order.id);

      const { url, init } = getFetchCall(fetchMock);
      expect(url).toBe(`${HOST_MOCK}${ORDER_SERVICE_MOCK}/${order.id}`);
      expect(init.credentials).toBe("include");
      expect(response).toEqual(order);
    });

    it("should throw an Error with the response text", async () => {
      mockFetch("Order not found", 404);

      await expect(getOrderById("missing")).rejects.toThrow("Order not found");
    });
  });
});
