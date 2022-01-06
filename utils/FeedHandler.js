const { DateSorter } = require('./DateSorter')
const { FilterObjectsList } = require('./FilterObjectsList');
const { RSSParser } = require('./RSSParser');

const NewsRSS = async (url) => {
  const feed = await RSSParser(url);
  const dateLinkTitle = FilterObjectsList(feed);
  return DateSorter(dateLinkTitle);
}

exports.FeedHandler = NewsRSS;
