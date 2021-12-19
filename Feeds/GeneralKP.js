const { DateSorter } = require('../utils/DateSorter')
const { FilterObjectsList } = require('../utils/FilterObjectsList');
const { RSSParser } = require('../utils/RSSParser');

const NewsRSS = async () => {
  const feed = await RSSParser('https://feeds.expressen.se/kvallsposten/');
  const dateLinkTitle = FilterObjectsList(feed);
  return DateSorter(dateLinkTitle);
}

exports.GeneralKPFeed = NewsRSS;
