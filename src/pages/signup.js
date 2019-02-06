import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import SupForm from '../components/SignUpForm/SupForm'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <SupForm />
  </Layout>
)

export default SignupPage
