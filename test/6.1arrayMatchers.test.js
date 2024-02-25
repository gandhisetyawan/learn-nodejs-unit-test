test("array simple", () => {
    const names = ["gndhi", "iwan", "sty"];
    expect(names).toEqual(["gndhi", "iwan", "sty"]);
    expect(names).toContain("iwan"); //memastikan value array memiliki item, (pengecekan toBe matchers)
});

test("array object", () => {
    const persons = [
        {
            name: "gndhi"
        },
        {
            name: "agung"
        }
    ];
    expect(persons).toEqual([
        {
            name: "gndhi"
        },
        {
            name: "agung"
        }
    ])
    expect(persons).toContainEqual({
        name: "agung"
    }); //memastikan value array memiliki item, (pengecekan toEqual matchers)

});
