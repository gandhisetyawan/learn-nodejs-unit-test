import {sayHelloAsync} from "../src/3async.js";

test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Gndhi")).resolves.toBe("Hello Gndhi");
});

test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Gndhi")).resolves.toBe("Hello Gndhi");
});

test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Gndhi")).resolves.toBe("Hello Gndhi");
});
