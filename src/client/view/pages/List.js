import React, {
  Component
} from "react"
import { inject, observer } from 'mobx-react'
import {
  ListGroup,
  ListGroupItem
} from 'reactstrap'
import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom'
import BaseComponent from '../components/BaseComponent'
import ViewContainer from '../containers/ViewContainer'

@inject('WikiPresenter')
@observer
class List extends BaseComponent {
  constructor(props) {
    super(props)
    console.log('List Constructor')
  }

  componentWillReact() {
    console.log("I will re-render")
  }

  render() {
    const { WikiPresenter } = this.props

    let wikis = WikiPresenter?.wikiItemList.map(wiki => (
      // eslint-disable-next-line react/jsx-key
      <ListGroupItem key={wiki._id}>
        <NavLink
          to={`/read/${wiki._id}`}
          key={wiki._id}
          title={wiki.title}
        >
          {wiki.title}
        </NavLink>
       </ListGroupItem>
     ))

    const content = ( <ListGroup>{wikis}</ListGroup> )

    return <ViewContainer content = {content}/>
  }
}

export default List

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