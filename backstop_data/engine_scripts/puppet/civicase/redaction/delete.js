'use strict';

module.exports = async (engine, scenario, viewport) => {
  await engine.click('a[title="Delete redaction_rule Type"]');
  await engine.waitForSelector('.modal-dialog > form', { visible: true });
  // wait for readjustment of modal window
  await engine.waitForTimeout(500);
};
