import React, {
  Component
} from 'react'

import ViewContainer from '../containers/ViewContainer'

export default class List extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const content = <div> thisis list page </div>

      return (<ViewContainer content = {content}/>)
    }
  }