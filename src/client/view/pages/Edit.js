import React, {
  PureComponent
} from 'react';

import ViewContainer from '../containers/ViewContainer';

export default class Edit extends PureComponent {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.state, {});
  }

  render() {
    const content = '<div>this is edit page {this.props.match}</div>';

    return (
      <ViewContainer content={content} />
    );
  }
}
