const { RuleTester } = require("eslint");
const dadJokeRule = require("./dad-jokes");

const ruleTester = new RuleTester({
  parserOptions: {ecmaVersion: 2015}
});


ruleTester.run(
  "dadJokeEslint", 
  dadJokeRule, 
  {
    valid: [{
      code: "const x = 123",
    }],
    invalid: [{
      code: `const imTest = 123; const ImTest = 456;`,
      output: `const imTest = 123; const dad = 456;`,
      errors: [
        {
          messageId: "helloItsMe"
        }
      ]
    }],
})

console.log('All tests passed!');
