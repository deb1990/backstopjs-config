'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.crm-wizard', { visible: true });
  await engine.waitFor('.cke', { visible: true });
};
