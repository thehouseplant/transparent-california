import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CitiesPage = () => (
  <Layout>
    <SEO title="Cities" />
    <h1>Cities</h1>

    <Link to="/cities/redlands">Redlands</Link>
  </Layout>
)

export default CitiesPage
