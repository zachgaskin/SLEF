import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Supform from '../components/SignUpForm/SupForm'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Supform />
  </Layout>
)

export default SignupPage
