import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import Header from "../Header"
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
          marginTop: '30px',
          }}
      >
        <main>{children}</main>
        <div className="sticky cursor-pointer w-80">
          <ArrowCircleUpIcon />
        </div>
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