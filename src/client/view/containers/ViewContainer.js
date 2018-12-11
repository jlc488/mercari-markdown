import React from "react"
import PropTypes from "prop-types"
import { Container, Row, Col } from 'reactstrap'
import { NavComponent } from "../components"

const ViewContainer = ({ content }) => {
  return (
  <Container>
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
  </Container>
  )
}

ViewContainer.propTypes = {
  content: PropTypes.element.isRequired
}

export default ViewContainer
