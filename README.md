# ESCLONE

A utility to deep copy ES6 types. Following are the supported types,
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

## Example
Install esclone using,

npm install --savedev esclone

To use in any file add require,

require('esclone');

And then use,

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

### Installing

npm install esclone

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
