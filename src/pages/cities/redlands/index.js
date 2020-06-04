import React from 'react'
import { Link } from 'gatsby'
import { Breadcrumb, Nav } from 'react-bootstrap'
import NumberFormat from 'react-number-format'

import Layout from '../../../components/layout'
import SEO from '../../../components/seo'
import Table from '../../../components/table'
import JSONData from '../../../../data/cities/redlands/redlands2018.json'

function Redlands() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Job Title',
        accessor: 'jobTitle',
      },
      {
        Header: 'Base Pay',
        accessor: 'basePay',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Overtime Pay',
        accessor: 'overtimePay',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Other Pay',
        accessor: 'otherPay',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Total Pay',
        accessor: 'totalPay',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Benefits',
        accessor: 'benefits',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Pension Debt',
        accessor: 'pensionDebt',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
      {
        Header: 'Total Pay & Benefits',
        accessor: 'totalPayBenefits',
        Cell: (props) => {
          return (
            <NumberFormat value={props.cell.value} displayType="text" thousandSeparator={true} prefix="$" />
          )
        }
      },
    ],
    []
  )

  const data = JSONData

  return (
    <Layout>
      <SEO title="City of Redlands" />

      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/cities">Cities</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Redlands
        </Breadcrumb.Item>
      </Breadcrumb>
      
      <h1>City of Redlands</h1>

      <p>
        <Nav variant="pills" defaultActiveKey="/cities/redlands">
          <Nav.Item>
            <Nav.Link href="/cities/redlands">2018</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2017">2017</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2016">2016</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2015">2015</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2014">2014</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2013">2013</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2012">2012</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/cities/redlands/2011">2011</Nav.Link>
          </Nav.Item>
        </Nav>
      </p>
      
      <p>
        <Table columns={columns} data={data} />
      </p>
    </Layout>
  )
}
  
export default Redlands