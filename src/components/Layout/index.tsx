import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "../Header"
import "./index.css"
import '../../styles/global.css'
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
      <>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <div
            style={{
            marginTop: '30px',
            }}
            className="max-w-full"
        >
          <main>{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </>
  )
}

export default Layout