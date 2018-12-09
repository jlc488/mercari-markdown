import pagination from './pagination';
import sorting from './sorting';

const getRequestOptions = (req) => {
  const paginationOptions = pagination.getPaginationOptions(req);
  const sortOptions = sorting.getSortingOptions(req);

  return Object.assign({}, paginationOptions, sortOptions);
};

const getFilteringOptions = (req, parameters) => {
  const options = {};

  parameters.forEach((param) => {
    if (req.query[param] !== undefined) {
      options[param] = req.query[param];
    }
  });

  return options;
};


module.exports = {
  getRequestOptions,
  getFilteringOptions
};
