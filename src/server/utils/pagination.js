/* eslint-disable import/no-self-import */
import sorting from './sorting';
import pagination from './pagination';

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
