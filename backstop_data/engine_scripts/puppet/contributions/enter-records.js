'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);

  await require('./batches')(engine, scenario, viewport);
  await page.clickAndWaitForNavigation('a[title="Batch Data Entry"]');

  // The .fa-calendar addon is present only in Shoreditch
  try {
    await engine.waitForSelector('.addon.fa-calendar', { visible: true });
  } catch (e) {}
};
