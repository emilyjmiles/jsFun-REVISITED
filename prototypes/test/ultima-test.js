const chai = require("chai");
const expect = chai.expect;

const { ultima } = require('../datasets/ultima');
const ultimaPrompts = require('../codeFiles/ultima-code');

describe("Ultima Prompts", () => {
  it.skip("totalDamage", () => {
    const e = ultimaPrompts.totalDamage();

    expect(e).to.deep.equal(113);
  });

  it.skip("charactersByTotal", () => {
    const e = ultimaPrompts.charactersByTotal();

    expect(e).to.deep.equal([{
      Avatar: {
        damage: 27,
        range: 24
      }
    }, {
      Iolo: {
        damage: 28,
        range: 46
      }
    }, {
      Shamino: {
        damage: 31,
        range: 39
      }
    }, {
      Dupre: {
        damage: 27,
        range: 24
      }
    }]);
  });
});
