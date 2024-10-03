import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Introduction from "../components/Introduction"
import About from "../components/About"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Introduction />
      <About />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Zeno SARL</title>
