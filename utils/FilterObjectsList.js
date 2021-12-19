const FilterObjectsList = objectsList => objectsList.items.map(item => {
    return {
      "date": item.pubDate,
      "link": item.link,
      "title": item.title,
    }
  });


exports.FilterObjectsList = FilterObjectsList;