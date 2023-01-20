const chai = require("chai");
const expect = chai.expect;

const { nationalParks } = require('../datasets/nationalParks');
const nationalParksPrompts = require('../codeFiles/nationalParks-code');

describe("National Park Prompts", () => {
  it.skip("getParkVisitList", () => {
    const e = nationalParksPrompts.getParkVisitList();

    expect(e).to.deep.equal({
      parksToVisit: ['Yellowstone', 'Glacier', 'Everglades'],
      parksVisited: ['Rocky Mountain', 'Acadia', 'Zion']
    });
  }),
    it.skip("getParkActivities", () => {
      const e = nationalParksPrompts.getParkActivities();

      expect(e).to.deep.equal(
        ['hiking',
          'shoeshoing',
          'camping',
          'fishing',
          'boating',
          'watching wildlife',
          'cross-country skiing',
          'swimming',
          'bird watching',
          'canyoneering',
          'backpacking',
          'rock climbing'
        ]);
    }),
    it.skip("getParkInEachState", () => {
      const e = nationalParksPrompts.getParkInEachState();

      expect(e).to.deep.equal(
        [
          { Colorado: 'Rocky Mountain' },
          { Wyoming: 'Yellowstone' },
          { Montana: 'Glacier' },
          { Maine: 'Acadia' },
          { Utah: 'Zion' },
          { Florida: 'Everglades' }
        ]);
    });
});
