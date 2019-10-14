import React from "react"
import Layout from "../../components/layout"
import {Link} from "gatsby"

export default function test() {
  return (
    <Layout>
      <h1>hello from testing page</h1>
      <Link to='/'>go back to index</Link>
    </Layout>
  )
}
