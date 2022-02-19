import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} sm={12} md={4} lg={4}>
          <section className="not-found">
            <h2 className="main--title text-center">Not Found</h2>
            <article className="main--excerpt text-center">
              <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            </article>
            <Link
              to="/"
              className="btn btn-block btn-outline-main text-uppercase margin-top-50"
            >
              Get in Home
            </Link>
          </section>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default NotFoundPage
