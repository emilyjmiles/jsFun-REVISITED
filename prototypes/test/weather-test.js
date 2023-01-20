const chai = require("chai");
const expect = chai.expect;

const { weather } = require('../datasets/weather');
const weatherPrompts = require('../codeFiles/weather-code');

describe("Weather prompts", () => {
  it.skip("getAverageTemps", () => {
    const e = weatherPrompts.getAverageTemps();

    expect(e).to.deep.equal([
      40, 40, 44.5, 43.5, 57, 35, 65.5, 62, 14, 46.5
    ]);
  }),
    it.skip("findSunnySpots", () => {
      const e = weatherPrompts.findSunnySpots();

      expect(e).to.deep.equal(['Atlanta, Georgia is sunny.', 'New Orleans, Louisiana is sunny.', 'Raleigh, North Carolina is mostly sunny.']
      );
    }),
    it.skip("findHighestHumidity", () => {
      const e = weatherPrompts.findHighestHumidity();

      expect(e).to.deep.equal({
        location: 'Portland, Oregon',
        type: 'cloudy',
        humidity: 84,
        temperature: { high: 49, low: 38 }
      });
    });
});
