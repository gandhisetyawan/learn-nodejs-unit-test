import { callMe, MyException } from "../src/2exception.js";

test("exception", () => {
    expect(() => callMe("Gndhi")).toThrow(); //memastikan exception apapun
    expect(() => callMe("Gndhi")).toThrow(MyException); //memastikan terjadi exception sesuai dengan expected exception
    expect(() => callMe("Gndhi")).toThrow("Ups my exceptions happens"); //memastikan terjadi exception sesuai dengan string message

});

test("exception not happens", () => {
    expect(callMe("Budi")).toBe("OK");
});
