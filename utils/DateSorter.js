const DateSorter = unsortedArray => {
  const newAr = unsortedArray.sort((a,b) => new Date(b.date) - new Date(a.date));
  return newAr.slice(0, 10);
}

exports.DateSorter = DateSorter;