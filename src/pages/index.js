import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Redlands from '../components/redlands'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Redlands />
  </Layout>
)

export default IndexPage
