import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../Header/header"
import "./index.css"
import '../../styles/global.css'

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
            // margin: `0 auto`,
            // maxWidth: `var(--size-content)`,
            // padding: `var(--size-gutter)`,
            marginTop: '30px',
            }}
        >
            <main>{children}</main>
            <footer
            className="text-black"
            style={{
                marginTop: `var(--space-5)`,
                fontSize: `var(--font-sm)`,
                textAlign: 'center'
            }}
            >
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
            </footer>
        </div>
    </>
)
}

export default Layout