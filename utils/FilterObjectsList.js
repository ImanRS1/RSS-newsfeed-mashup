const FilterObjectsList = objectsList => {
  return objectsList.items.map(item => {
    return {
      "date": item.pubDate,
      "link": item.link,
    }
  });
}

exports.FilterObjectsList = FilterObjectsList;