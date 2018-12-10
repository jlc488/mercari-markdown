import React, {
  Component
} from 'react';

import ViewContainer from '../containers/ViewContainer';

export default class List extends Component {
  render() {
    const content = '<div>thisis list page?? {this.props.match}</div>';

    return (<ViewContainer content={content} />
    );
  }
}
