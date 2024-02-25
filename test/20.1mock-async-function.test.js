import {getBalance} from "../src/3async.js";

test.only("mock async function", async () => {
    const from = jest.fn();
    from.mockResolvedValueOnce(1000); //data promise
    // from.mockResolvedValue(1000);

    //promise<object>
    await expect(getBalance("Gndhi", from)).resolves.toEqual({
        name: "Gndhi",
        balance: 1000
    });
    // console.info(getBalance("Gndhi",from));
    // console.info(from.mock.calls.length);
    expect(from.mock.calls.length).toBe(1);
    expect(from).toHaveBeenCalledTimes(1);
    await expect(from.mock.results[0].value).resolves.toBe(1000);
});

test.failing("mock async function rejected", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce(new Error("Ups"));

    await getBalance("Gndhi", from);
});

test("mock async function error matchers", async () => {
    const from = jest.fn();
    from.mockRejectedValueOnce("Rejected");

    await expect(getBalance("Gndhi", from)).rejects.toBe("Rejected");
});
