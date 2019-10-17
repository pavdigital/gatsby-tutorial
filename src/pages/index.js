import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {Button} from "../components/button"
import { FaApple } from "react-icons/fa"
import Info from '../components/info'
import Dude from  '../components/dude'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

    <Link to='/product/'><h1>Products Page</h1></Link>

    <Info/>
    <Dude/>
      <Link to="/images">Link</Link>
    <h1 style={{color:'red'}}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>



      <Image />


    </div>

    <FaApple className="icon"/>
    <Button>I am from styled</Button>

    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/products/testing/">Go to testing  page</Link>



  </Layout>
)



export default IndexPage
