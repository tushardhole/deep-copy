import esclone from "../lib/index.js"

describe('depth copy', () => {

  const verifyDeepCopy = (foo, fooClone) => {
    expect(fooClone).not.toBe(foo);
    expect(fooClone).toEqual(foo)
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

    const rockyClone = esclone(rocky);
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

      const rockyClone = esclone(rocky);
      expect(rockyClone.roomNo).not.toBe(rocky.roomNo);
      expect(rockyClone).toEqual(rocky)
    });

    it('should perform deep copy with nested arrays', () => {
      const rocky = {
        name: "Rocky",
        roomNo: [[10, 10], [11, 11]]
      };

      const rockyClone = esclone(rocky);
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

      const rockyClone = esclone(rocky);
      expect(rockyClone.roomNo).not.toBe(rocky.roomNo);
      expect(rockyClone).toEqual(rocky)
    })
  });

  describe("individual for data types", () => {
    it('should perform deep copy for Number type', () => {
      let n = 10;
      let nClone = esclone(n);
      expect(nClone).not.toBe(n);
      expect(nClone).toEqual(n);

      n = new Number(10.12);
      nClone = esclone(n);
      verifyDeepCopy(n, nClone);
    });

    it('should perform deep copy for Boolean type', () => {
      let bool = false;
      let boolClone = esclone(bool);
      expect(boolClone).not.toBe(bool);
      expect(boolClone).toEqual(bool);

      bool = new Boolean(false);
      boolClone = esclone(bool);
      verifyDeepCopy(bool, boolClone);
    });

    it('should perform deep copy for String type', () => {
      let foo = "foo";
      let fooClone = esclone(foo);
      expect(fooClone).not.toBe(foo);
      expect(fooClone).toEqual(foo);

      foo = new String("foo");
      fooClone = esclone(foo);
      verifyDeepCopy(foo, fooClone);
    });

    it('should perform deep copy for Date type', () => {
      const foo = new Date();
      foo.setYear(2050);
      const fooClone = esclone(foo);
      verifyDeepCopy(foo, fooClone);
    });

    it('should perform deep copy for Set type', () => {
      const foo = new Set();
      foo.add(10);
      foo.add(10);
      const fooClone = esclone(foo);
      verifyDeepCopy(foo, fooClone);
    });

    it('should perform deep copy for Map type', () => {
      const foo = new Map();
      foo.set("k", 10);
      foo.set("l", 12);
      const fooClone = esclone(foo);
      verifyDeepCopy(foo, fooClone);
    });

    it('should perform shallow for Unsupported types', () => {
      let foo = new Function();
      let fooClone = esclone(foo);
      expect(fooClone).toBe(foo);

      foo = new WeakMap();
      foo.set(new String("k"), 10);
      foo.set(new String("l"), 12);
      fooClone = esclone(foo);
      expect(fooClone).toBe(foo);

      foo = new WeakSet();
      foo.add(new Number(10));
      foo.add(new Number(10));
      fooClone = esclone(foo);
      expect(fooClone).toBe(foo);
    })
  });

});