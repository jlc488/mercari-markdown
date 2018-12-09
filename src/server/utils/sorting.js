const getSortingOptions = req => ((req.query.sort !== undefined) ? {
  sort: req.query.sort.replace(',', ' ')
} : {});

module.exports = {
  getSortingOptions
};
