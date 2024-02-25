import { sum } from "../src/1sum.js";

// expect(value).toBe(expected) : value sama dengan expected ( value bukan obj)
test("test toBe", () => {
  let name = "gndhi";
  let hello = `Hello ${name}`;

  expect(hello).toBe("Hello gndhi")
})


test("test toEquals", () => {
  let person = { id: "gndhi001" };
  Object.assign(person, {name : "gndhi sty", address : "jakarta"});

  expect(person).toEqual({id : "gndhi001", name : "gndhi sty", address : "jakarta"})
})