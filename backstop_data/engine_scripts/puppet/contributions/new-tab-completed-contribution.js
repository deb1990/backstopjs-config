'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, vp) => {
  const page = await Page.build(engine, scenario, vp);

  // Search directly as default value is completed.
  await page.clickAndWaitForNavigation('#_qf_Search_refresh');
  await page.openInNewTab('.crm-contact-contribute-contributions > table > tbody > tr:first-child [title="View Contribution"]');
};
