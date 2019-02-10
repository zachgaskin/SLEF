import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MachForm from '../components/SignUpForm/MForm'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MachForm />
  </Layout>
)

export default SignupPage
