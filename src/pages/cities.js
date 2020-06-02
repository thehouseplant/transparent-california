import React from "react"
import { Link } from 'gatsby'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import Layout from "../components/layout"
import SEO from "../components/seo"

const CitiesPage = () => (
  <Layout>
    <SEO title="Cities" />

    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item active>
        Cities
      </Breadcrumb.Item>
    </Breadcrumb>
    
    <h1>Cities</h1>

    <Link to="/cities/redlands">Redlands</Link>
  </Layout>
)

export default CitiesPage
