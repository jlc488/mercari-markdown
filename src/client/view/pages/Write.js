import React, {
  PureComponent
} from 'react';

import ViewContainer from '../containers/ViewContainer';

export default class Write extends PureComponent {

  render() {
    const content = '<div>this is write page {this.props.match}</div>';

    return (
      <ViewContainer content={content} />
    );
  }
}
