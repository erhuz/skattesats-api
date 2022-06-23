[<img src="https://media.giphy.com/media/xUPGcGqQZevNCJeiCA/giphy.gif" width="100%" style="margin: 0 auto">](https://www.themoviedb.org/tv/60573-silicon-valley)
# Skattesats API

<table>
<tr>
<td>
  A API middleman that simplifies requests to retrieve taxrates from different Swedish municipalities. Data retrieved from the Swedish Tax Agency's rest API (Skatteverket.se) 
</td>
</tr>
</table>

## Installing
1. Clone the repository
`git clone https://github.com/erhuz/skattesats-api.git`
2. Move inside the cloned directory and install the NPM Packages
`cd skattesats-api && npm install`
3. Set up environment variables such as dev/prod or desired port
`cp .env.example .env`
4. Start the application
`npm run dev`

## Usage
This app will host an API that simplifies some of the Swedish Tax Agency's REST endpoints. It is enought to retrieve up-to-date taxrates for preliminary tax and automate tax declaration & calculation.

## Endpoints
* GET `/years`
* GET `/municipalities/:year`
* GET `/assemblies/:municipality/:year`
* GET `/tax/municipality/:year/:assembly?`

## Built with
* NodeJS
* ExpressJS
* Node-fetch
* Winston

## License
MIT License
