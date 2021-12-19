const { DateSorter } = require('../utils/DateSorter')
const { FilterObjectsList } = require('../utils/FilterObjectsList');
const { RSSParser } = require('../utils/RSSParser');

const NewsRSS = async () => {
  const feed = await RSSParser('http://expressen.se/rss/ledare');
  const dateLinkTitle = FilterObjectsList(feed);
  return DateSorter(dateLinkTitle);
}

exports.LedareExpressenFeed = NewsRSS;
