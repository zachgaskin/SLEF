import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
//import Billboard from '../components/billboard'
//import StyledBackgroundSection from '../components/bgImage'

import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import BillboardImg from '../components/billboard'
import { Banner } from '../utils'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<StyledBackgroundSection />*/}
    <BillboardImg fluid={props.data.desktop.childImageSharp.fluid}>
      <Banner title="SOMERSET" subtitle="Youth Football & Cheer" />
    </BillboardImg>

    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "bcg/mightymite2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
