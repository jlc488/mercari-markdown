import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'reactstrap'
import { NavComponent } from "../components"
import DevTools from 'mobx-react-devtools'

const ViewContainer = ({ content }) => {
  return (
  <Container fluid={true}>
    <Row><Col>&nbsp;</Col></Row>
    <Row>
      <Col>
        <NavComponent />
      </Col>
    </Row>
    <Row>
      <Col>
        {content}
      </Col>
    </Row>
    <DevTools/>
  </Container>
  )
}

ViewContainer.propTypes = {
  content: PropTypes.element.isRequired
}

export default ViewContainer
