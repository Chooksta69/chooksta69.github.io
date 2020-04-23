/** @module Layout */
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import {graphql, StaticQuery} from 'gatsby'
import PropTypes from 'prop-types'
import React, {Fragment} from 'react'

/** Main site layout that renders using the Gatsby's StaticQuery: https://www.gatsbyjs.org/docs/static-query/ */
const Layout = ({children}) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Header />
        <div className="wrapper">
          <main id="main">{children}</main>
        </div>
        <Footer />
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  /** Content which should wrapped in the page layout. */
  children: PropTypes.node.isRequired
}

export default Layout
