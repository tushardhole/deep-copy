require('../src/index.js');

describe('depth copy', () => {

  const verifyDeepCopyForType = (Type) => {
    var foo = new Type();
    var foolClone = Object.depthCopy(foo);
    expect(foolClone).not.toBe(foo);
    expect(foolClone).toEqual(foo)
  };

  it('should be done for simple objects', () => {
    const rockysGrandFather = {
      name: "Rockys grand father",
      father: "Don't know :("
    };

    const rockysFather = {
      name: "Rockys Father",
      father: rockysGrandFather
    };

    const rocky = {
      name: "Rocky",
      father: rockysFather
    };

    const rockyClone = Object.depthCopy(rocky);
    expect(rockyClone.father).not.toBe(rocky.father);
    expect(rockyClone.father.father).not.toBe(rocky.father.father);
    expect(rockyClone).toEqual(rocky)
  });

  describe('for arrays', () => {
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

  describe("individual for data types", () => {
    it('should perform deep copy for Number type', () => {
      var n = 10;
      var nClone = Object.depthCopy(n);
      expect(nClone).not.toBe(n);
      expect(nClone).toEqual(n);

      verifyDeepCopyForType(Boolean);
    });

    it('should perform deep copy for Boolean type', () => {
      var bool = false;
      var boolClone = Object.depthCopy(bool);
      expect(boolClone).not.toBe(bool);
      expect(boolClone).toEqual(bool);

      verifyDeepCopyForType(Boolean);
    });

    it('should perform deep copy for String type', () => {
      var foo = "foo";
      var foolClone = Object.depthCopy(foo);
      expect(foolClone).not.toBe(foo);
      expect(foolClone).toEqual(foo);

      verifyDeepCopyForType(String);
    });

    it('should perform deep copy for Date type', () => {
      verifyDeepCopyForType(Date)
    });

    it('should perform shallow for Function/Unsupported type', () => {
      const foo = new Function();
      const fooClone = Object.depthCopy(foo);
      expect(fooClone).toBe(foo);
    })
  });

});