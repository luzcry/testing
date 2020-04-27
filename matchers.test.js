describe('comparadores comunes', () => {
    const user = {
        name: "laz",
        lastname: "bermuz"
    }
    const user2 = {
        name: "laz",
        lastname: "bermuz"
    }

    test("igualdad de elementos", () => {
        expect(user).toEqual(user2);
    });

    test("No son exactamente iguales", () => {
        expect(user).not.toEqual(user2);
    })
});