import { describe, expect, it } from "vitest";

import { formatToBrl } from "@/utils/currency";

// toLocaleString separa "R$" do valor com espaço não separável (U+00A0).
const normalize = (value: string) => value.replace(/\s/g, " ");

describe("formatToBrl", () => {
  it("should format integers with two decimal places", () => {
    expect(normalize(formatToBrl(100))).toBe("R$ 100,00");
  });

  it("should use dot for thousands and comma for decimals", () => {
    expect(normalize(formatToBrl(1234.5))).toBe("R$ 1.234,50");
  });

  it("should round to cents", () => {
    expect(normalize(formatToBrl(19.999))).toBe("R$ 20,00");
  });

  it("should format zero", () => {
    expect(normalize(formatToBrl(0))).toBe("R$ 0,00");
  });
});
