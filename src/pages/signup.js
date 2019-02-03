import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { PageHeader, Banner } from '../utils'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader>
      <Banner title="Sign Up" subtitle="Youth Football & Cheer" />
    </PageHeader>
  </Layout>
)

export default SignupPage
/*
export default class SignupPage extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="mf_placeholder"
          data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
          data-formheight="6315"
          data-formtitle="2019 Football & Cheer Registration Copy"
          data-paddingbottom="10"
        />
        <script
          type="text/javascript"
          src="https://littleeaglefootball.forms-db.com/js/jquery.min.js"
        />
        <script
          type="text/javascript"
          src="https://littleeaglefootball.forms-db.com/js/jquery.ba-postmessage.min.js"
        />
        <script
          type="text/javascript"
          src="https://littleeaglefootball.forms-db.com/js/machform_loader.js"
        />
      </React.Fragment>
    )
  }
}
*/
