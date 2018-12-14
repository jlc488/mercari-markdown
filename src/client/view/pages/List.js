import React from "react"
import { inject, observer } from 'mobx-react'
import {
  ListGroup,
  ListGroupItem,
  Label
} from 'reactstrap'
import PropTypes from 'prop-types'
import {NavLink, withRouter } from 'react-router-dom'
import BaseComponent from '../components/BaseComponent'
import ViewContainer from '../containers/ViewContainer'
import _ from 'lodash'


@inject('WikiPresenter')
@withRouter
@observer
class List extends BaseComponent {
  
  constructor(props) {
    super(props)
    this.wItemList = []
    this.props.WikiPresenter.loadWikiItemList()
  }
  
  // componentWillReact() {
  //   console.log("List page will re-render")
  // }
  
  componentDidAmount() {
    this.wItemList = this.props.WikiPresenter.wikiItemList
  }

  emptyList() {
    return (
    <ListGroup>
      <ListGroupItem>
        <Label>Empty List</Label>
      </ListGroupItem>
    </ListGroup>
    )
  }

  generateList() {
    let wikis = _.map(this.wItemList, wiki => (
      // eslint-disable-next-line react/jsx-key
      <ListGroupItem key={wiki?._id}>
        <NavLink
          to={`/read/${wiki?._id}`}
          key={wiki?._id}
          title={wiki?.title}
        >
          {wiki?.title}
        </NavLink>
       </ListGroupItem>
     ))
     return <ListGroup>{wikis}</ListGroup>
  }

  render() {
    this.wItemList = this.props.WikiPresenter.wikiItemList

    const content = this.wItemList.length ? this.generateList() : this.emptyList()

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