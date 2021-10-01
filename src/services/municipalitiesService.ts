import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { URL } from 'url';
import logger from '../logger';

const municipalitiesService = async (req, res) => {
  const url: URL = new URL('https://www.skatteverket.se/st-api/rest/v1/kommuner');
  const { year }: { year: number } = req.params;

  await fetch(url.toString(), {})
    .then((response: Response) => response.json())
    .then((json: Object) => {
      const output: Object = {
        municipalities: json[year],
      };

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default municipalitiesService;
