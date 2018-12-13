import React, {
  Component
} from "react"
import { inject, observer } from 'mobx-react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import PropTypes from 'prop-types'
import ViewContainer from '../containers/ViewContainer'

@inject('WikiPresenter')
@observer
export default class List extends Component {
  constructor(props) {
    super(props)
    console.log('List Constructor')

    this.goRead = this.goRead.bind(this)
  }

  componentWillReact() {
    console.log("I will re-render, since the todo has changed!")
  }


  goRead( evt, _id ) {
    evt.preventDefault()
    console.log(evt)
    console.log('goRead clicked' + _id)
  }

  render() {
    const { WikiPresenter } = this.props

    let wikis = WikiPresenter?.wikiItemList.map(wiki => (
      // eslint-disable-next-line react/jsx-key
      <ListGroupItem key={wiki._id} onClick={e => this.goRead(e, wiki._id)}> {wiki.content} </ListGroupItem>
     ))

    const content = ( <ListGroup>{wikis}</ListGroup> )

    return <ViewContainer content = {content}/>
  }
}

List.propTypes = {
  wikiItemList: PropTypes.object
}
List.wrappedComponent.propTypes = {
  WikiPresenter: PropTypes.object
}
ListGroup.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // boolean to render list group items edge-to-edge in a parent container
  flush: PropTypes.bool,
  className: PropTypes.string,
  cssModule: PropTypes.object,
}