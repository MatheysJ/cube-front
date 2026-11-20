import { describe, expect, it } from "vitest";

import { FIELD } from "@/constants/field";
import { PATTERN } from "@/constants/pattern";
import {
  formatByField,
  formatCPF,
  formatDate,
  formatPhone,
  formatPostalCode,
  removeSpecialChars,
} from "@/utils/format";

describe("format", () => {
  describe("formatCPF", () => {
    it("should format a complete CPF", () => {
      expect(formatCPF("12345678909")).toBe("123.456.789-09");
    });

    it("should format a CPF while it is being typed", () => {
      expect(formatCPF("1234")).toBe("123.4");
      expect(formatCPF("1234567")).toBe("123.456.7");
    });

    it("should ignore non digit characters", () => {
      expect(formatCPF("123.456abc789-09")).toBe("123.456.789-09");
    });

    it("should produce a value accepted by the CPF pattern", () => {
      expect(PATTERN.CPF.value.test(formatCPF("12345678909"))).toBe(true);
    });
  });

  describe("formatDate", () => {
    it("should format a complete date", () => {
      expect(formatDate("01022000")).toBe("01/02/2000");
    });

    it("should drop digits after the year", () => {
      expect(formatDate("010220001")).toBe("01/02/2000");
    });

    it("should produce a value accepted by the birth pattern", () => {
      expect(PATTERN.BIRTH.value.test(formatDate("31122000"))).toBe(true);
    });
  });

  describe("formatPhone", () => {
    it("should separate the area code", () => {
      expect(formatPhone("11987654321")).toBe("11-987654321");
    });

    it("should drop digits after the ninth number", () => {
      expect(formatPhone("119876543210")).toBe("11-987654321");
    });

    it("should produce a value accepted by the phone pattern", () => {
      expect(PATTERN.PHONE.value.test(formatPhone("(11) 98765-4321"))).toBe(true);
    });
  });

  describe("formatPostalCode", () => {
    it("should format a complete postal code", () => {
      expect(formatPostalCode("01310100")).toBe("01310-100");
    });

    it("should drop digits after the postal code", () => {
      expect(formatPostalCode("013101009")).toBe("01310-100");
    });

    it("should produce a value accepted by the postal code pattern", () => {
      expect(PATTERN.POSTAL_CODE.value.test(formatPostalCode("01310100"))).toBe(true);
    });
  });

  describe("formatByField", () => {
    it("should map each masked field to its formatter", () => {
      expect(formatByField[FIELD.CPF]).toBe(formatCPF);
      expect(formatByField[FIELD.BIRTH]).toBe(formatDate);
      expect(formatByField[FIELD.PHONE]).toBe(formatPhone);
      expect(formatByField[FIELD.POSTAL_CODE]).toBe(formatPostalCode);
    });

    it("should not have a formatter for free text fields", () => {
      expect(formatByField[FIELD.NAME]).toBeUndefined();
    });
  });

  describe("removeSpecialChars", () => {
    it("should keep only digits", () => {
      expect(removeSpecialChars("123.456.789-09")).toBe("12345678909");
      expect(removeSpecialChars("01310-100")).toBe("01310100");
    });
  });
});
