'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  await require('./search-result')(engine, scenario, vp);
  await engine.click('tr:first-child span.crm-hover-button');
  await page.clickAndWaitForModal('a[title="Renew Membership"]');
};
