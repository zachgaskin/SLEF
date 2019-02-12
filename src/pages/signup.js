import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import MFApp from '../components/SignUpForm/MFApp'
import { Section } from '../utils'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Section>
      <MFApp />
    </Section>
  </Layout>
)

export default SignupPage
