const { GeneralExpressenFeed } = require('./Feeds/GeneralExpressen.js');
const { GeneralGTFeed } = require('./Feeds/GeneralGT.js');
const { GeneralKPFeed } = require('./Feeds/GeneralKP.js');
const { SportExpressenFeed } = require('./Feeds/SportExpressen');
const { NojeExpressenFeed } = require('./Feeds/NojeExpressen');
const { DebattExpressenFeed } = require('./Feeds/DebattExpressen');
const { LedareExpressenFeed } = require('./Feeds/LedareExpressen');
const { KulturExpressenFeed } = require('./Feeds/KulturExpressen');
const { HalsaExpressenFeed } = require('./Feeds/HalsaExpressen');
const { MotorExpressenFeed } = require('./Feeds/MotorExpressen');
const { ResExpressenFeed } = require('./Feeds/ResExpressen');

const { DateSorter } = require('./utils/DateSorter.js');

const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const retriver = async () => {
    const feed1 = await GeneralExpressenFeed();
    const feed2 = await GeneralGTFeed();
    const feed3 = await GeneralKPFeed();
    const feed4 = await SportExpressenFeed();
    const feed5 = await NojeExpressenFeed();
    const feed6 = await DebattExpressenFeed();
    const feed7 = await LedareExpressenFeed();
    const feed8 = await KulturExpressenFeed();
    const feed9 = await HalsaExpressenFeed();
    const feed10 = await MotorExpressenFeed();
    const feed11 = await ResExpressenFeed();

    mashedFeed = feed1.concat(feed2, feed3, feed4, feed5, feed6, feed7, feed8, feed9, feed10, feed11);
    const titles = mashedFeed.map(newsObject => newsObject.title)
    const filtered = mashedFeed.filter((newsObject, index) => {
      return !titles.includes(newsObject.title, index + 1);
    });
    return DateSorter(filtered);
}

app.get('/', async (req, res) => {
  const resultArr = await retriver();
  res.render('index', {
    urlArray: resultArr,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})