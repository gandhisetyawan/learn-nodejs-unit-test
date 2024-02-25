import {UserRepository} from "../src/user-repository.js";
import {UserService} from "../src/user-service.js";


jest.mock("../src/user-repository.js");

const repository = new UserRepository(); //mock object
const service = new UserService(repository);

test("test mock user save", () => {

    const user = {
        id: 1,
        name: "Gndhi"
    };

    service.save(user);

    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);

});

test("test mock class findById",() => {
    const user = {
        id: 1,
        name: "Gndhi"
    };

    repository.findById.mockReturnValueOnce(user); // set data mock
    
    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
})

test("test mock class findAll",() => {
    const users = [
        {
            id: 1,
            name: "Gndhi"
        },
        {
            id: 2,
            name: "Gndhi"
        }
    ];

    repository.findAll.mockReturnValueOnce(users);

    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
})
