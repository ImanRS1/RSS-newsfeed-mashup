const Parser = require('rss-parser');
const parser = new Parser();

const RSSParser = async (url) => await parser.parseURL(url);

exports.RSSParser = RSSParser;