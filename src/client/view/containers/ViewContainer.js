import React from 'react';
import PropTypes from 'prop-types';

const ViewContainer = ({ content }) => (
  <div>
    {content}
  </div>
);

ViewContainer.propTypes = {
  content: PropTypes.element.isRequired
};

export default ViewContainer;
