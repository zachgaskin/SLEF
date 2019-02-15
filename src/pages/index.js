import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/mightymite.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader img={img}>
      <Banner title="Somerset" subtitle="Youth Football & Cheer">
        <Link to="/signup/" style={{ textDecoration: 'none' }}>
          <BannerButton style={{ margin: '2rem auto' }}>Sign Up</BannerButton>
        </Link>
      </Banner>
    </HomeHeader>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
