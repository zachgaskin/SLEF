import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import BillboardImg from '../components/billboard'
import { Link } from 'gatsby'
import { BannerButton, Banner } from '../utils'
//import StyledBackgroundSection from '../components/bgImage'

import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import Hero from '../utils/hero'

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/*<StyledBackgroundSection />*/}
    <Hero>
      <BillboardImg fluid={props.data.desktop.childImageSharp.fluid} />
      <Banner title="SOMERSET" subtitle="Youth Football & Cheer">
        <Link to="/signup/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>Sign Up</BannerButton>
        </Link>
      </Banner>
    </Hero>

    {/*<BgImage fluid={props.data.desktop.childImageSharp.fluid}>
      <h2 style={{ color: 'white' }}>Look at me!</h2>
    </BgImage>*/}
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
