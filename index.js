const express = require('express')
const app = express()
let Parser = require('rss-parser');
let parser = new Parser();
const path = require('path');
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

const retriver = async () => {
    let feed = await parser.parseURL('https://feeds.expressen.se/nyheter/');
    const resultArr = feed.items.map(item => item.link);
    return resultArr;
}

app.get('/', async (req, res) => {
  const resultArr = await retriver();
  //res.send(resultArr)
  console.log((resultArr));
  res.render('index', {
    urlArray: resultArr,
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})