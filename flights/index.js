const puppeteer = require('puppeteer');
const logger = require('./logger');

/**
 * scrapes hotwire for best flight price given an origin, destination and date
 * @function flights
 * @param {object}
 * @property {string} origin - of param object the origin code for flight search
 * @property {array} destinations  - of param object the destinations for flight search
 * @property {string} date - of param object the data formated 'MM/DD/YYYY' for flight search
 */
flights = async ({origin = 'DTW', destinations = ['BKK', 'NYC', 'CUN', 'REK', 'DUB', 'EYW', 'MIL', 'BOM'], date = '03/31/2018'}) => {
  logger.info('Initializing Scrape');
  const browser = await puppeteer.launch();
  const promises = [];
  for (const dest of destinations) {
    promises.push(new Promise(async (resolve, reject) => {
      const url = `https://vacation.hotwire.com/Flights-Search?tmid=20886970078&trip=OneWay&leg1=from:${origin},to:${dest},departure:${date}TANYT&passengers=children:0,adults:1,seniors:0,infantinlap:Y&options=sortby:price&mode=search&paandi=true`;
      logger.info('visiting page at ' + url);
      const page = await browser.newPage();
      await page.goto(url, {timeout: 600000, waitUntil: 'networkidle2'});
      const priceElement = await page.$('[data-test-id="listing-price-dollars"]');
      let priceValue, price;
      try {
       priceValue = await priceElement.getProperty('innerText');
      }  catch (e) {
        logger.warn(`could not find price for ${origin} -> ${dest}`);
        price = '$0';
      }
      logger.info('scrape complete for ' + url);
      resolve({ destination: { code: dest, price: price || await priceValue.jsonValue(), url}});
    }));
  }
  return Promise.all(promises).then(result => {
    logger.info(`Scrape complete for all destinations: ${origin} -> ${destinations}`);
    browser.close();
    return result;
  });
};

module.exports = flights;