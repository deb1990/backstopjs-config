'use strict';

module.exports = async (engine, scenario, vp) => {
  await engine.waitFor('.crm-datatable-pager-bottom');
};
