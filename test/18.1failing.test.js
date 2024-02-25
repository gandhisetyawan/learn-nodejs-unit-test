import {sayHello} from "../src/4sayHello.js";

test("sayHello success", () => {
    expect(sayHello("Gndhi")).toBe("Hello Gndhi");
});

test.failing("sayHello error", () => {
    sayHello(null);
});

test("sayHello error matchers", () => {
    expect(() => sayHello(null)).toThrow(); // apapun errornya
});
