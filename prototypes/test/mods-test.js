const chai = require("chai");
const expect = chai.expect;

const { mods } = require('../datasets/mods');
const modPrompts = require('../codeFiles/mods-code');

describe("Mod Prompts", () => {
  it.skip("studentsPerMod", () => {
    const e = modPrompts.studentsPerMod();

    expect(e).to.deep.equal([{
      mod: 1,
      studentsPerInstructor: 9
    }, {
      mod: 2,
      studentsPerInstructor: 11
    }, {
      mod: 3,
      studentsPerInstructor: 10
    }, {
      mod: 4,
      studentsPerInstructor: 8
    }]);
  });
});
