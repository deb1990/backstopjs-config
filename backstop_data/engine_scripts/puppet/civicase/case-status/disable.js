'use strict';

module.exports = async (engine, scenario, viewport) => {
  await engine.click('a[title="Disable case_status"]');
  await engine.waitForSelector('.crm-confirm-dialog.crm-ajax-container', { visible: true });
  await engine.waitForSelector('.blockUI.blockOverlay', { hidden: true });
  // wait for readjustment of modal window
  await engine.waitForTimeout(200);
};
