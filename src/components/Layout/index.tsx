import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Loader from "../Common/loader";

import Header from "../Header"
import "./index.css"
import '../../styles/global.css'
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {

  const [loading, setLoading] = React.useState(true);

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  React.useEffect(() => {
    setTimeout(() => {
        setLoading(false);
    }, 2000);
  }, []);

  if (loading)
    return <Loader />;

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