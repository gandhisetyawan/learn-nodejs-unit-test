import {calculate} from "../src/1sum.js";

test("test mock matchers", () => {
    const callback = jest.fn();

    calculate([10, 10, 10], callback);
    calculate([10, 10, 10, 10, 10], callback);

    expect(callback).toHaveBeenCalled(); //memastikan mock pernah di panggil
    expect(callback).toHaveBeenCalledTimes(2); // mock pernah di panggil sebanya number
    expect(callback).toHaveBeenCalledWith(30); // mock pernah di panggil dengan parameter
    expect(callback).toHaveBeenCalledWith(50);
});
