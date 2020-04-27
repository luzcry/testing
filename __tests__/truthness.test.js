import { isNull, isTrue, isFalse, isUndefined } from "../truthness";

describe("probar valores nulos", () => {
  test("null", () => {
    expect(isNull()).toBeNull();
  });
});

describe("probar valores verdaderos", () => {
  test("verdadero", () => {
    expect(isTrue()).toBeTruthy();
  });
});

describe("probar resultados falsos", () => {
  test("falsos", () => {
    expect(isFalse()).toBeFalsy();
  });
});

describe("probar resultados undefined", () => {
  test("undefined", () => {
    expect(isUndefined()).toBeUndefined();
  });
});

describe("probar resultados no verdaderos", () => {
  test("falso o verdadero", () => {
    expect(isFalse()).not.toBeTruthy();
  });
});
