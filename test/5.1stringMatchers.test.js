test("string", () => {
    const name = "gndhi iwan sty";

    expect(name).toBe("gndhi iwan sty");
    expect(name).toMatch(/wan/); //memsatikan value sesuai dengan regex
});
