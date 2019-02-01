import React from 'react';
import Layout from '../components/layout'
import SEO from '../components/seo'

const SignupPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    render(){
      <div>
        <div id="mf_placeholder"
          data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
          data-formheight="6315"
          data-formtitle="2019 Football & Cheer Registration Copy"
          data-paddingbottom="10">
        </div>
        <script>
          function (f,o,r,m){
              r = f.createElement('script')};{ r.async=1};{r.src=o+'js/mf.js'};{
                m=f.getElementById('mf_placeholder')}; {m.parentNode.insertBefore(r, m)}
            (document.'https://littleeaglefootball.forms-db.com/');
        </script>
      </div>
    }
  </Layout>
)

export default SignupPage

