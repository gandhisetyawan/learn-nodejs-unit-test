test("numbers", () => {

    const value = 2 + 2;

    expect(value).toBeGreaterThan(3); //memastikan value lebih besar dari n
    expect(value).toBeGreaterThanOrEqual(4); //memastikan value lebih besar atau sama dengan n

    expect(value).toBeLessThan(5); //memastikan value lebih kecil dari n
    expect(value).toBeLessThanOrEqual(4); //memastikan value lebih kecil atau sama dengan n


    expect(value).toBe(4);

});
