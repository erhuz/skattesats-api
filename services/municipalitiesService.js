const fetch = require('node-fetch');
const logger = require('../logger');

const municipalitiesService = async (req, res) => {
  const url = 'https://www.skatteverket.se/st-api/rest/v1/kommuner';
  const { year } = req.params;

  await fetch(url)
    .then(response => response.json())
    .then((json) => {
      const output = {
        municipalities: json[year]
      };

      console.log(output);

      // output.municipalities.forEach((name, index) => {
      //   output.municipalities[index] = name
      //     .replace('å', 'a')
      //     .replace('ä', 'a')
      //     .replace('ö', 'o');
      // });

      res.json(output);
    });
};

module.exports = municipalitiesService;
