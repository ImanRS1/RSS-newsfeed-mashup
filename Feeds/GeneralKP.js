const { DateSorter } = require('../utils/DateSorter')
const { FilterObjectsList } = require('../utils/FilterObjectsList');
const { RSSParser } = require('../utils/RSSParser');

const NewsRSS = async () => {
  const feed = await RSSParser('https://feeds.expressen.se/kvallsposten/');
  const dateAndLink = FilterObjectsList(feed);
  return DateSorter(dateAndLink);
}

exports.GeneralKPFeed = NewsRSS;
