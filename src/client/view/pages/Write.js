import React, {
  PureComponent
} from 'react';

import ViewContainer from '../containers/ViewContainer';


export default class Write extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const content = <div> this is write page </div>;

    return ( 
      <ViewContainer content = {content}/>
    );
  }
}