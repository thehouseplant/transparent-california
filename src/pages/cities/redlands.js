import React from 'react'
import { Link } from 'gatsby'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import NumberFormat from 'react-number-format'

import Layout from '../../components/layout'
import Table from '../../components/table'
import JSONData from '../../../data/redlands2018.json'

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
      
      <h1>Redlands</h1>
      
      <p>
        <Table columns={columns} data={data} />
      </p>
    </Layout>
  )
}
  
export default Redlands