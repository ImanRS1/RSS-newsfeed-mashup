const { GeneralExpressenFeed } = require('./Feeds/GeneralExpressen.js');
const { GeneralGTFeed } = require('./Feeds/GeneralGT.js');
const { GeneralKPFeed } = require('./Feeds/GeneralKP.js');
const { RSSParser } = require('./utils/RSSParser');
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
    rltfeed = feed1.concat(feed2, feed3);
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