import React, {
  PureComponent
} from 'react';

import ViewContainer from '../containers/ViewContainer';

export default class Read extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, {});
  }

  render() {
    const content = '<div>this is read page {this.props.match}</div>';

    return (
      <ViewContainer content={content} />
    );
  }
}
