import { describe, expect, it } from "vitest";

import { PATTERN } from "@/constants/pattern";

describe("PATTERN", () => {
  it.each(["senha123!", "Cube2025@x", "abc12345#"])(
    "should accept password %s",
    (password) => {
      expect(PATTERN.PASSWORD.value.test(password)).toBe(true);
    }
  );

  it.each([
    ["senha1234", "sem símbolo"],
    ["senhasenha!", "sem número"],
    ["12345678!", "sem letra minúscula"],
    ["s1!abcd", "menos de 8 caracteres"],
    ["senha123!senha123!abc", "mais de 20 caracteres"],
  ])("should reject password %s (%s)", (password) => {
    expect(PATTERN.PASSWORD.value.test(password)).toBe(false);
  });

  it("should validate CPF format", () => {
    expect(PATTERN.CPF.value.test("123.456.789-09")).toBe(true);
    expect(PATTERN.CPF.value.test("12345678909")).toBe(false);
    expect(PATTERN.CPF.value.test("123.456.789-0")).toBe(false);
  });

  it("should validate e-mail format", () => {
    expect(PATTERN.MAIL.value.test("cliente@cube.test")).toBe(true);
    expect(PATTERN.MAIL.value.test("cliente@cube")).toBe(false);
    expect(PATTERN.MAIL.value.test("cli ente@cube.test")).toBe(false);
  });

  it("should validate birth date format", () => {
    expect(PATTERN.BIRTH.value.test("31/12/2000")).toBe(true);
    expect(PATTERN.BIRTH.value.test("32/01/2000")).toBe(false);
    expect(PATTERN.BIRTH.value.test("01/13/2000")).toBe(false);
    expect(PATTERN.BIRTH.value.test("1/1/2000")).toBe(false);
  });

  it("should validate phone format", () => {
    expect(PATTERN.PHONE.value.test("11-987654321")).toBe(true);
    expect(PATTERN.PHONE.value.test("11987654321")).toBe(false);
  });

  it("should validate postal code format", () => {
    expect(PATTERN.POSTAL_CODE.value.test("01310-100")).toBe(true);
    expect(PATTERN.POSTAL_CODE.value.test("01310100")).toBe(false);
  });
});
