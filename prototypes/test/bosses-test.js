const chai = require("chai");
const expect = chai.expect;

const { bosses } = require('../datasets/bosses');
const bossPrompts = require('../codeFiles/bosses-code');

describe("Boss Prompts", () => {
  it.skip("should return a list of bosses with the boss name and the sum of all sidekicks loyalty", () => {
    const e = bossPrompts.bossLoyalty();

    expect(e).to.deep.equal([{
      bossName: "Scar",
      sidekickLoyalty: 16
    }, {
      bossName: "Ursula",
      sidekickLoyalty: 20
    }, {
      bossName: "Jafar",
      sidekickLoyalty: 3
    }]);
  });
});