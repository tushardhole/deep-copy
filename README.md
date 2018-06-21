[![Build Status](https://travis-ci.org/tushardhole/deep-copy.svg?branch=master)](https://travis-ci.org/tushardhole/deep-copy)
# ESCLONE

An utility to deep copy ES6 types. Following are the supported types,
1. Json Object
2. Number
3. String
4. Boolean
5. Map
6. Set
7. Date
8. Array

All other types will be shallow copied.

## Getting Started

1. Clone the repo
2. run the test using "npm test"

### Prerequisites

1. Node 5.4.0 and greater

## Example use in ES6
Install esclone using,
    
    npm install --savedev esclone

To use in any file add import for esclone as below,
    
    import esclone from "esclone";

And then use in code as below,

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
    
## Example use in ES5
Install esclone using,
    
    npm install --savedev esclone

And then use in code as below,

    var esclone = require("esclone")
    var foo = new String("abcd")
    var fooClone = esclone.default(foo)
    console.log(fooClone)
    console.log(foo === fooClone)

### Installing

npm install --savedev esclone

## Running the tests

npm run test

### Running lint
/node_modules/eslint/bin/eslint.js --ext .js  ./src

### Running lint in auto fix moed
/node_modules/eslint/bin/eslint.js --ext .js  ./src --fix

## Authors

Tushar Dhole

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
