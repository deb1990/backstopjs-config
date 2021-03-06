'use strict';

const Page = require('../page-objects/crm-configure-contribution-page.js');

module.exports = async (engine, scenario, viewport) => {
  const page = await Page.build(engine, scenario, viewport);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  await page.clickAndWaitForNavigation('a[title="Personal Campaign Pages"]');
  await engine.waitForSelector('.CRM_PCP_Form_Contribute');
  await page.enableCheckbox('input#pcp_active');
};
