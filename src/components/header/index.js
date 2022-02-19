import React from "react"
import { Container, Row, Col } from "reactstrap"

const HeaderHome = () => (
  <header className="header-home">
    <Container>
      <Row className="align-items-center justify-content-between animate__animated animate__bounceInDown">
        <Col xs={12} sm={12} md={3} lg={3}>
          <figure className="header-logo">
            {/* <Image {...logo} className="d-block img-fluid" alt="HYSS Hogar" /> */}
          </figure>
        </Col>
      </Row>
    </Container>
  </header>
)

export default HeaderHome
