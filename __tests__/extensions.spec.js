require("depth-copy");
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

    const rockyClone = Object.depthCopy(rocky);
    expect(rockyClone.father).not.toBe(rocky.father);
    expect(rockyClone.father.father).not.toBe(rocky.father.father);
    expect(rockyClone).toEqual(rocky)
  });

  it('should perform deep copy with arrays', () => {
    const rocky = {
      name: "Rocky",
      roomNo: [10, 11]
    };

    const rockyClone = Object.depthCopy(rocky);
    expect(rockyClone.roomNo).not.toBe(rocky.roomNo);
    expect(rockyClone).toEqual(rocky)
  });

  it('should perform deep copy with nested arrays', () => {
    const rocky = {
      name: "Rocky",
      roomNo: [[10, 10], [11, 11]]
    };

    const rockyClone = Object.depthCopy(rocky);
    expect(rockyClone.roomNo).not.toBe(rocky.roomNo);
    expect(rockyClone).toEqual(rocky)
  });

  it('should perform deep copy with array of objects', () => {
    const rocky = {
      name: "Rocky",
      roomNo: [
        {
          wing: "C1",
          number: [11, 12]
        }
      ]
    };

    const rockyClone = Object.depthCopy(rocky);
    expect(rockyClone.roomNo).not.toBe(rocky.roomNo);
    expect(rockyClone).toEqual(rocky)
  })
});