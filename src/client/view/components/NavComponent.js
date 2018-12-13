import React from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import {withRouter} from 'react-router-dom'
class NavComponent extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/list">List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/write">Write</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
        </Nav>
      </div>
    )
  }
}

export default withRouter(NavComponent)
