import React, {
  PureComponent
} from 'react'

import ViewContainer from '../containers/ViewContainer'

export default class Edit extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const content = <div>this is edit page</div>

    return ( <
      ViewContainer content = {
        content
      }
      />
    )
  }
}