import fetch from 'node-fetch';
import { Response } from 'node-fetch';
import { URL } from 'url';
import logger from '../logger';

const taxService = async (req, res) => {
  const { municipality, year }: { municipality: string; year: number } = req.params;
  let { assembly }: { assembly: string } = req.params;
  let churchMember: boolean = true;

  if (!assembly) {
    logger.debug(assembly);
    churchMember = false;
    assembly = '';
  }

  const url: URL = new URL(`https://www.skatteverket.se/st-api/rest/v1/skattetabell?forsamling=${assembly}&inkomstar=${year}&kommun=${municipality}&medlemsvkyrkan=${churchMember}`);

  logger.debug(url);

  await fetch(url.toString(), {})
    .then((response: Response) => response.json())
    .then((json: Object) => {
      const output = {
        tax: json,
      };

      res.json(output);
    })
    .catch((err) => {
      logger.error(err);
    });
};

export default taxService;
