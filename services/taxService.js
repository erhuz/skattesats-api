const fetch = require('node-fetch');
const { URL } = require('url');
const logger = require('../logger');

const taxService = async (req, res) => {
  const { municipality, year } = req.params;
  let { assebly } = req.params;
  let churchMember = true;

  if (!assebly) {
    logger.debug(assebly);
    churchMember = false;
    assebly = '';
  }

  const url = new URL(`https://www.skatteverket.se/st-api/rest/v1/skattetabell?forsamling=${assebly}&inkomstar=${year}&kommun=${municipality}&medlemsvkyrkan=${churchMember}`);

  logger.debug(url);

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      const output = {
        tax: json
      };

      console.log(output);

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

module.exports = taxService;
