import React from "react"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  const nowYear = new Date().getFullYear();
  return (
    <footer className="footer-home main--bg-green">
      <Container>
        <Row className="align-items-end justify-content-center">
          <Col xs={12} sm={12} md={4} lg={4}>
            <div className="footer-home--locations">
              <p>&copy; Todos los derechos reservados - {nowYear}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
