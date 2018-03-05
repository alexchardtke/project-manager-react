let cheerio = require('cheerio');
let $ = cheerio.load('https://www.accuweather.com/en/us/maple-grove-mn/55311/march-weather/338851');

function scrapeForecast() {
  let weatherList = [];
  let day = {};
  $('trbody .this-week').each((index, element) => {
    weatherList[index] = {};
    console.log('hi');
    $('td').each(function (index, element) {
      weatherList[index][day]['date'] = $(element).find('.today time').text();
      weatherList[index][day]['high'] = $(element).find('.today .temp .large-temp').text();
      weatherList[index][day]['low'] = $(element).find('.today .temp .small-temp').text();
    });
  });
  console.log(weatherList);
}

export default scrapeForecast;
