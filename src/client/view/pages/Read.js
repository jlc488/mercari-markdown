import React, {
  PureComponent
} from 'react'

import ViewContainer from '../containers/ViewContainer'

export default class Read extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const content = <div>this is read page</div>

    return (
      <ViewContainer content={content} />
    )
  }
}
