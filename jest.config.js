module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.(js|ts|tsx)$": "babel-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};




// module.exports = {
//   preset: "jest-expo",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };




// module.exports = {
//   preset: 'jest-expo',
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };


// module.exports = {
//   preset: 'jest-expo',
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
// };
