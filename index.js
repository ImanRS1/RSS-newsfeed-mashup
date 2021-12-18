const ExpressenGeneralFeed = require('./Feeds/GeneralExpressen.js');
const GTGeneralFeed = require('./Feeds/GeneralGT.js');
const KPGeneralFeed = require('./Feeds/GeneralKP.js');
const express = require('express')
const app = express()
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const retriver = async () => {
    const feed1 = await ExpressenGeneralFeed.NewsRSS();
    const feed2 = await GTGeneralFeed.NewsRSS();
    const feed3 = await KPGeneralFeed.NewsRSS();
    rltfeed = feed1.concat(feed2);
    console.log(rltfeed);
    return rltfeed;
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