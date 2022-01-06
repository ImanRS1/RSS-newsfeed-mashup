const { FeedHandler } = require("./utils/FeedHandler");
const { DateSorter } = require("./utils/DateSorter.js");

const express = require("express");
const app = express();
const path = require("path");
const port = 3001;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

const urlArray = [
  "http://expressen.se/rss/debatt",
  "http://gt.se/rss/nyheter",
  "http://gt.se/rss/nyheter",
  "https://feeds.expressen.se/kvallsposten",
  "http://expressen.se/rss/halsa",
  "http://expressen.se/rss/kultur",
  "http://expressen.se/rss/ledare",
  "http://expressen.se/rss/motor",
  "http://expressen.se/rss/noje",
  "http://expressen.se/rss/res",
  "http://expressen.se/rss/sport",
];

const retriver = async () => {
  const feed = await Promise.all(
    urlArray.map(async (url) => await FeedHandler(url))
  );
  const resultArray = feed.reduce((a, b) => a.concat(b), []);

  const uniqueObjects = {};
  resultArray.forEach((obj) => {
    uniqueObjects[obj.id] = obj;
  });

  return DateSorter(Object.values(uniqueObjects));
};

app.get("/", async (req, res) => {
  const resultArr = await retriver();
  res.render("index", {
    urlArray: resultArr,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
