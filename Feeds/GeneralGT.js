const Parser = require('rss-parser');
const parser = new Parser();
const arraySorter = require('../utils/DateSorter')

const NewsRSS = async () => {
  const feed = await parser.parseURL('http://gt.se/rss/nyheter');
  const dateAndLink = feed.items.map(item => {
    const filteredObject = {
      "date": item.pubDate,
      "link": item.link,
    }
    return filteredObject
  });

  return arraySorter.DateSorter(dateAndLink);;
}

exports.NewsRSS = NewsRSS;
