/** @module SEO */
import {graphql, useStaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'

export const getSchemaOrgJSONLD = ({
  datePublished,
  description,
  image,
  isBlogPost,
  logo,
  siteUrl,
  siteAuthor,
  siteTitle,
  title,
  url
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: siteTitle,
      alternateName: siteTitle
    }
  ]

  return isBlogPost
    ? [
        ...schemaOrgJSONLD,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image
              }
            }
          ]
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          headline: title,
          name: siteAuthor,
          subheadline: description,
          image: {
            '@type': 'ImageObject',
            url: image
          },
          description,
          author: {
            '@type': 'Person',
            name: siteAuthor
          },
          publisher: {
            '@type': 'Organization',
            url: siteUrl,
            logo: {
              '@type': 'ImageObject',
              name: siteTitle,
              width: '60',
              height: '600',
              url: logo
            },
            name: siteAuthor
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': siteUrl
          },
          datePublished,
          dateModified: datePublished
        }
      ]
    : schemaOrgJSONLD
}

/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
export function SEO({
  title,
  description,
  postData,
  postImage,
  isBlogPost,
  location,
  lang,
  keywords,
  hideFromRobots,
  children
}) {
  let {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            ogDescription
            author
            url
            logo
            image
            name
          }
        }
      }
    `
  )
  const siteMeta = site && site.siteMetadata ? site.siteMetadata : {}
  const postMeta = postData && postData.frontmatter ? postData.frontmatter : {}
  const meta = []
  const tags =
    postMeta && postMeta.tags
      ? postMeta.tags.split(',')
      : keywords
      ? keywords.split(',')
      : []

  const pageTitle = title || postMeta.title || siteMeta.title
  const pageDescription =
    description || postMeta.description || siteMeta.ogDescription
  const image = postImage
    ? `${siteMeta.url}${postImage}`
    : `${siteMeta.url}${siteMeta.image}`

  const datePublished = isBlogPost ? postMeta.date : false
  const url = location ? `${siteMeta.url}${location}` : siteMeta.url

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    datePublished,
    pageDescription,
    image,
    isBlogPost,
    logo: siteMeta.logo,
    siteUrl: siteMeta.url,
    siteAuthor: siteMeta.name,
    siteTitle: siteMeta.title,
    title: pageTitle,
    url: url || siteMeta.url
  })

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={pageTitle}
      titleTemplate={
        title || postMeta.title ? `%s | ${siteMeta.title}` : siteMeta.title
      }
      meta={[
        {
          name: `description`,
          content: pageDescription
        },
        {
          property: `og:title`,
          content:
            title || postMeta.title
              ? `${title || postMeta.title} | ${siteMeta.title}`
              : siteMeta.title
        },
        {
          property: `og:description`,
          content: pageDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`
        },
        {
          name: `twitter:creator`,
          content: siteMeta.author
        },
        {
          name: `twitter:title`,
          content:
            title || postMeta.title
              ? `${title || postMeta.title} | ${siteMeta.title}`
              : siteMeta.title
        },
        {
          name: `twitter:image`,
          content: image
        },
        {
          name: `twitter:description`,
          content: pageDescription
        },
        {
          name: 'robots',
          content: hideFromRobots ? 'noindex nofollow' : 'index follow'
        }
      ]
        .concat(
          tags.length > 0
            ? {
                name: `keywords`,
                content: tags.join(`, `)
              }
            : []
        )
        .concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>
      {children}
    </Helmet>
  )
}

SEO.propTypes = {
  /* The page language. */
  lang: PropTypes.string,
  /* The page tags. */
  tags: PropTypes.string,
  /* The page title. */
  title: PropTypes.string,
  /* The page description. */
  description: PropTypes.string,
  /* The post meta data if applicable. */
  postMeta: PropTypes.object,
  /* The site meta data. */
  siteMeta: PropTypes.object
}

SEO.defaultProps = {
  lang: `en`,
  postMeta: {},
  siteMeta: {}
}

export default SEO
