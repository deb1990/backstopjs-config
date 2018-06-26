'use strict';

const Page = require('../page-objects/crm-page.js');

module.exports = async (engine, scenario, viewPort) => {
  const page = new Page(engine, scenario, viewPort);

  await engine.click('.crm-contribution-page-configure-actions .crm-hover-button');
  // Enabling the pointer events for the link which are disabled 
  // Reason - Since shoreditch uses boostrap button styles and adds pointer-events none to links with 'disabled' class. 
  await engine.addStyleTag({
    'content': 'a.disabled.crm-hover-button { pointer-events: auto !important;}'
  });
  await page.clickAndWaitForNavigation('a[title="Membership Settings"]');
  await engine.waitForSelector('.CRM_Member_Form_MembershipBlock');
  await page.enableCheckbox('input#member_is_active');
}
