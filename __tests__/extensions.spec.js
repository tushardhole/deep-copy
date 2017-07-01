require("deep-copy");
jest.enableAutomock();
jest.unmock("../index.js");

describe('object extensions', () => {
  it('should perform deep copy', () => {
    const grandFather = {
      name: "Rockys father",
      father: "Don't know :("
    };

    const father = {
      name: "Rockys Father",
      father: grandFather
    };

    const rocky = {
      name: "Rocky",
      father: father
    };

    const rockyClone = Object.deepCopy(rocky);
    expect(rockyClone.father).not.toBe(rocky.father);
    expect(rockyClone.father.father).not.toBe(rocky.father.father);
    expect(rockyClone).toEqual(rocky)
  })
});