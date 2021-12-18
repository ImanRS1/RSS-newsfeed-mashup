const { DateSorter } = require('../utils/DateSorter');
const { FilterObjectsList } = require('../utils/FilterObjectsList');
const { RSSParser } = require('../utils/RSSParser');

const NewsRSS = async () => {
  const feed = await RSSParser('http://gt.se/rss/nyheter');
  const dateAndLink = FilterObjectsList(feed);
  return DateSorter(dateAndLink);
}

exports.GeneralExpressenFeed = NewsRSS;
