const Parser = require('rss-parser');
const parser = new Parser();
const { DateSorter } = require('../utils/DateSorter')
const { FilterObjectsList } = require('../utils/FilterObjectsList');

const NewsRSS = async () => {
  const feed = await parser.parseURL('https://feeds.expressen.se/kvallsposten/');
  const dateAndLink = FilterObjectsList(feed);

  return DateSorter(dateAndLink);
}

exports.GeneralKPFeed = NewsRSS;
