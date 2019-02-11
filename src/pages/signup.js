import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MFApp from '../components/SignUpForm/MFApp'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MFApp />
  </Layout>
)

export default SignupPage
