import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ description, keywords, title, image, url }) => {
  const site = "https://angry-bohr-9e84bc.netlify.app"

  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription = description
          ? description
          : data.site.siteMetadata.description
        const metaTitle = title ? title : data.site.siteMetadata.title
        const metaUrl = url ? url : data.site.siteMetadata.url
        const metaImage = image
          ? `${site}${image}`
          : data.site.siteMetadata.image
        const metaKeywords = keywords
          ? keywords
          : [
              "lake wales restaurants",
              "lake wales taproom",
              "lake wales bar",
              "lake wales beer",
              "lake wales fl",
            ]
        return (
          <Helmet
            title={title}
            meta={[
              {
                name: `description`,
                content: metaDescription,
              },
              {
                property: `og:title`,
                content: metaTitle,
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
                property: `og:image`,
                content: metaImage,
              },
              {
                property: `og:url`,
                content: metaUrl,
              },
              {
                name: `twitter:card`,
                content: `summary_large_image`,
              },
              {
                name: `twitter:title`,
                content: metaTitle,
              },
              {
                name: `twitter:description`,
                content: metaDescription,
              },
              {
                name: `twitter:image`,
                content: metaImage,
              },
            ].concat(
              metaKeywords && metaKeywords.length > 0
                ? {
                    name: `keywords`,
                    content: metaKeywords.join(`, `),
                  }
                : []
            )}
          />
        )
      }}
    />
  )
}

export default Seo

const detailsQuery = graphql`
  query DefaulySEOQuery {
    site {
      siteMetadata {
        title
        description
        image
        url
      }
    }
  }
`
