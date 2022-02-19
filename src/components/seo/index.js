import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function SEO({ lang = "en", meta = [], data }) {
  const {
    author,
    ogImage,
    seo: {
      focus_synonyms: keywords,
      meta_description: metaDescription,
      seo_title: title,
    },
  } = data

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title || "Salesprout"}
      titleTemplate={title ? `%s | ${title}` : "Salesprout"}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: "keywords",
          content: keywords?.join(","),
        },
        {
          property: `og:title`,
          content: title || "Salesprout",
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
      .concat(
        ogImage
          ? [
              {
                property: "og:image",
                content: ogImage?.asset?.fluid?.src,
              },
              {
                name: "twitter:card",
                content: "summary_large_image",
              },
            ]
          : [
              {
                name: "twitter:card",
                content: "summary",
              },
            ]
      )
      .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  data: {
    author: null,
    ogImage: null,
    seo: {
      focus_synonyms: [],
      meta_description: null,
      seo_title: null,
    },
  },
}

SEO.propTypes = {
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  data: PropTypes.shape({}).isRequired,
}

export default SEO
