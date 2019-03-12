import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'
import contactImg from '../images/bcg/undercenter2.jpg'

import QuickInfo from '../components/HomePageComponents/QuickInfo'

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>
      <Banner title="Contact Us" subtitle="Youth Football & Cheer" />
    </PageHeader>
    <QuickInfo />
  </Layout>
)

export default ContactPage
