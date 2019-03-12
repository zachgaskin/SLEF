import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledBackgroundSection from '../components/bgImage'

//import QuickInfo from '../components/HomePageComponents/QuickInfo'
//import Gallery from '../components/HomePageComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StyledBackgroundSection />
    {/*<QuickInfo /> 
    <Gallery />*/}
  </Layout>
)

export default IndexPage
