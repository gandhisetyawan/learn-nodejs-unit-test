test("truthiness", () => {

    let value = null;
    expect(value).toBeNull(); //memastikan value adalah null
    expect(value).toBeDefined(); //memastikan value adalah defined
    expect(value).toBeFalsy(); //memastikan value bernilai apapun, asal if statement menganggap false


    value = undefined;
    expect(value).toBeUndefined(); //memastikan value adalah undefined 
    expect(value).toBeFalsy(); //memastikan value bernilai apapun, asal id statement menganggap false

    value = "Gndhi";
    expect(value).toBeTruthy(); //memastikan value bernilai apapun, asal id statement menganggap true
    expect(value).toBe("Gndhi"); //equals matchers

});
