import React from 'react'
import PropTypes from 'prop-types'

import Header from '../header'
import Footer from '../footer'

const LayoutHome = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

LayoutHome.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutHome
