import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { HomeHeader, Banner, BannerButton } from '../utils'
import img from '../images/bcg/mightymite2.jpg'
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import Gallery from '../components/HomePageComponents/Gallery'
import { Link } from 'gatsby'
import Img from '../components/img'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Img>
      <HomeHeader img={img}>
        <Banner title="Somerset" subtitle="Youth Football & Cheer">
          <Link to="/signup/" style={{ textDecoration: 'none' }}>
            <BannerButton style={{ margin: '2rem auto' }}>Sign Up</BannerButton>
          </Link>
        </Banner>
      </HomeHeader>
    </Img>
    <QuickInfo />
    <Gallery />
  </Layout>
)

export default IndexPage
