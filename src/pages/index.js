import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {HomeHeader} from '../utils'
import img from '../images/bcg/mightymite.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>Hello from the Home Page</HomeHeader>
  </Layout>
)


export default IndexPage
  