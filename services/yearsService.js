const puppeteer = require('puppeteer');
const logger = require('../logger');

const yearsService = async (req, res) => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.skatteverket.se/privat/skatter/arbeteochinkomst/skattetabeller.4.18e1b10334ebe8bc80005221.html');

  res.status(200).json({});
};

module.exports = yearsService;
