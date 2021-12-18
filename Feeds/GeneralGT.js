const Parser = require('rss-parser');
const parser = new Parser();
const { DateSorter } = require('../utils/DateSorter')
const { FilterObjectsList } = require('../utils/FilterObjectsList')

const NewsRSS = async () => {
  const feed = await parser.parseURL('http://gt.se/rss/nyheter');
  const dateAndLink = FilterObjectsList(feed);

  return DateSorter(dateAndLink);
}

exports.GeneralGTFeed = NewsRSS;
