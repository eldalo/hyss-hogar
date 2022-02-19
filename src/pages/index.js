import React from "react"
import { Container, Row, Col } from "reactstrap"
import AnchorLink from "react-anchor-link-smooth-scroll"

// import SEO from "../components/seo"
import Layout from "../components/layout"
import ContactForm from "../components/form"

import MOCK from "../data/home"

const HomePage = () => {
  const { hero, products, slogan, contact } = MOCK
  return (
    <Layout>
      {/* <SEO title="HYSS Hogar" data={seo} /> */}
      <section className="home-banner main--bg-green">
        <Container>
          <Row className="align-items-end justify-content-between">
            <Col xs={12} sm={12} md={5} lg={5} className="" />
            <Col xs={12} sm={12} md={4} lg={4}>
              <article className="home-banner--excerpt animate__animated animate__fadeInLeft">
                <h2>{hero?.subtitle}</h2>
                <p>{hero?.description}</p>
              </article>
              <AnchorLink
                href={hero?.button?.link}
                className="btn btn-block btn-outline-main text-uppercase margin-top-50 animate__animated animate__fadeInUp"
              >
                {hero?.button?.text}
              </AnchorLink>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="home-clients">
        <Container>
          <Row className="align-items-start">
            <Col xs={12} sm={12} md={2} lg={2} className="home-title">
              <h3 className="home-title--sub">{products?.title}</h3>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center margin-top-30">
            {products?.items?.map(item => (
              <Col
                xs={6}
                sm={3}
                md={2}
                lg={2}
                className="animate__animated animate__fadeInUp home-clients--item"
                key={`product-col__${item?.id}`}
              >
                <img
                  key={`product-img__${item?.id}`}
                  className="d-block m-auto img-fluid w-100"
                  src={item?.src}
                  alt={item?.title}
                  title={item?.title}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="home-banner-cta">
        <Container>
          <Row className="align-items-start justify-content-center">
            <Col xs={12} sm={12} md={6} lg={6} className="animate__animated">
              <article className="home-banner-cta--excerpt text-center">
                <h4 className="home-banner-cta--excerpt__title">{slogan}</h4>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="contact-us" className="home-contact">
        <Container>
          <Row className="align-items-start justify-content-between">
            <Col xs={12} sm={12} md={6} lg={6} className="home-title">
              <h3 className="home-title--sub margin-bottom-30">{contact?.title}</h3>
              <p className="home-title--big margin-bottom-15">{contact?.description}</p>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}

export default HomePage
