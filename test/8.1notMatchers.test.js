import { MyException, callMe } from "../src/2exception.js";

test("string.not", () => {
    const name = "Gndhi iwan sty";

    expect(name).not.toBe("agung");
    expect(name).not.toEqual("agung asdsad");
    expect(name).not.toMatch(/agung/);
});

test("number.not", () => {
    const value = 2 + 2;

    expect(value).not.toBeGreaterThan(6);
    expect(value).not.toBeLessThan(3);
    expect(value).not.toBe(10);
});
