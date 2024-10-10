import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/Layout"
import Introduction from "../components/Introduction"
import About from "../components/About"
import Service from "../components/Service"
import Testimony from "../components/Testimony"
import Contact from "../components/Contact"
import BackToTopButton from "../components/Common/top-button"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <Introduction />
      <About />
      <Service />
      <Testimony />
      <Contact />
      <BackToTopButton />
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Zeno SARL - Développement informatique</title>
