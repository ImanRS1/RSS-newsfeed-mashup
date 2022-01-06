const FilterObjectsList = objectsList => objectsList.items.map(item => {
    return {
      "date": item.isoDate,
      "link": item.link,
      "id": item.guid,
      "title": item.title,
    }
  });


exports.FilterObjectsList = FilterObjectsList;