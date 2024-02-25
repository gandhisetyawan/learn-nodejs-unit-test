import {sayHelloAsync} from "../src/3async.js";

test("test async function", async () => {
    const result = await sayHelloAsync("Gndhi");
    expect(result).toBe("Hello Gndhi");
});

test("test async matchers", async () => {
    await expect(sayHelloAsync("Gndhi")).resolves.toBe("Hello Gndhi");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
});
