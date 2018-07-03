'use strict';

module.exports = async (engine, scenario, vp) => {
  await require('./find.js')(engine, scenario, vp);
  await Promise.all([
    engine.click('a[title="Manage Case"]'),
    engine.waitForNavigation()
  ]);
  await require('./../common/open-accordions.js')(engine, scenario, vp);
};
