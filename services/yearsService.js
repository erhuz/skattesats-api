const fetch = require('node-fetch');
const { URL } = require('url');
const logger = require('../logger');

const yearsService = async (req, res) => {
  const url = new URL('https://www.skatteverket.se/st-api/rest/v1/kommuner');

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      const years = {
        years: Object.keys(json)
      };

      logger.debug(json);

      res.json(years);
    })
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = yearsService;
