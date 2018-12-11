import React, { Component } from "react"

import ViewContainer from "../containers/ViewContainer"

export default class List extends Component {
  constructor(props) {
    super(props)
    console.log('fuck')
  }

  render() {
    const content = <div> thisis fuck list page </div>

    return <ViewContainer content={content} />
  }
}
