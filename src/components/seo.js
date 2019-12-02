import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

function SEO({ title, meta, lang }) {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | Isle of Malta`}
      meta={[
        {
          property: `og:title`,
          content: `${title}`,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `pl`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
