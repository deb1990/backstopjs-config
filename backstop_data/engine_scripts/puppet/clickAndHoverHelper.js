module.exports = async (page, scenario) => {
  var hoverSelector = scenario.hoverSelectors || scenario.hoverSelector;
  var clickSelector = scenario.clickSelectors || scenario.clickSelector;
  var postInteractionWait = scenario.postInteractionWait; // selector [str] | ms [int]

  if (hoverSelector) {
    for (const hoverSelectorIndex of [].concat(hoverSelector)) {
      await page.waitForSelector(hoverSelectorIndex);
      await page.hover(hoverSelectorIndex);
    }
  }

  if (clickSelector) {
    for (const clickSelectorIndex of [].concat(clickSelector)) {
      await page.waitForSelector(clickSelectorIndex);
      await page.click(clickSelectorIndex);
    }
  }

  if (postInteractionWait) {
    await page.waitForTimeout(postInteractionWait);
  }
};
