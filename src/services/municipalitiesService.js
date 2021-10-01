const fetch = require('node-fetch');
const { URL } = require('url');
const logger = require('../logger');

const municipalitiesService = async (req, res) => {
  const url = new URL('https://www.skatteverket.se/st-api/rest/v1/kommuner');
  const { year } = req.params;

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      const output = {
        municipalities: json[year]
      };

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = municipalitiesService;
