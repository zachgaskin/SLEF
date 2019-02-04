import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Singnupform from '../components/SignUpForm/Signupform'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Singnupform />
  </Layout>
)

export default SignupPage
