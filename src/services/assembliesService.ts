import fetch from 'node-fetch';
import { URL } from 'url';
import logger from '../logger';

const municipalitiesService = async (req, res) => {
  const { municipality, year } = req.params;

  const url: URL = new URL(`https://www.skatteverket.se/st-api/rest/v1/forsamlingar?inkomstar=${year}&kommun=${municipality}`);

  logger.debug(url);

  await fetch(url.toString())
    .then((response) => response.json())
    .then((json) => {
      const output = {
        asseblies: json,
      };

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default municipalitiesService;
