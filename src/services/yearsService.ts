import { Request, Response } from 'express';
import fetch, { Response as FetchResponse } from 'node-fetch';
import { URL } from 'url';
import logger from '../logger';

const yearsService = async (req: Request, res: Response) => {
  const url: URL = new URL('https://www.skatteverket.se/st-api/rest/v1/kommuner');

  await fetch(url.toString(), {})
    .then((response: FetchResponse) => response.json())
    .then((json: any) => {
      const years = {
        years: Object.keys(json),
      };

      logger.debug(json);

      res.json(years);
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default yearsService;
