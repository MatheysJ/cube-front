import { describe, expect, it } from "vitest";

import { getMockOfOrderBody } from "@/test/factory";

import { FULFILLMENT_ERROR, getFulfillmentError } from "../utils";

const getDeliveryValues = () => ({ ...getMockOfOrderBody(), isPickUp: false });

describe("getFulfillmentError", () => {
  it("should accept a delivery with the whole address filled", () => {
    expect(getFulfillmentError(getDeliveryValues())).toBeNull();
  });

  it("should require every address field on delivery", () => {
    const values = getDeliveryValues();
    values.address.street = "";

    expect(getFulfillmentError(values)).toBe(FULFILLMENT_ERROR.ADDRESS);
  });

  it("should require the addressee on delivery", () => {
    const values = getDeliveryValues();
    values.address.addressee.fullName = "";

    expect(getFulfillmentError(values)).toBe(FULFILLMENT_ERROR.ADDRESS);
  });

  it("should accept a pick up with only the addressee filled", () => {
    const values = {
      isPickUp: true,
      address: { street: "", addressee: { fullName: "Cliente Cube" } },
    };

    expect(getFulfillmentError(values)).toBeNull();
  });

  it("should require the addressee on pick up", () => {
    const values = {
      isPickUp: true,
      address: { addressee: { fullName: "" } },
    };

    expect(getFulfillmentError(values)).toBe(FULFILLMENT_ERROR.ADDRESSEE);
  });
});
