import { sumar, multiplicar, restar, dividir } from "../maths.js";

describe("calculos matemáticos", () => {
  test("prueba de sumas", () => {
    expect(sumar(1, 1)).toBe(2);
  });
  test("multiplicar", () => {
    expect(multiplicar(2, 2)).toBe(4);
  });
  test("prueba de restar", () => {
    expect(restar(3, 2)).toBe(1);
  });
  test("prueba de dividir", () => {
    expect(dividir(10, 2)).toBe(5);
  });
});
