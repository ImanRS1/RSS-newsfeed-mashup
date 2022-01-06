const { DateSorter } = require('./DateSorter')
const { FilterObjectsList } = require('./FilterObjectsList');
const { RSSParser } = require('./RSSParser');

const NewsRSS = async (url) => {
  const feed = await RSSParser(url);
  const dateLinkIdTitle = FilterObjectsList(feed);
  return DateSorter(dateLinkIdTitle);
}

exports.FeedHandler = NewsRSS;
