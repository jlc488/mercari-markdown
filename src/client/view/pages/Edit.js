import React, { PureComponent } from "react"
import ViewContainer from "../containers/ViewContainer"
import BaseComponent from '../components/BaseComponent'

class Edit extends BaseComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const content = <div>this is edit page</div>

    return <ViewContainer content={content} />
  }
}

export default Edit