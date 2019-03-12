import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import StyledBackgroundSection from '../components/bgImage'
import styled from 'styled-components'

//import QuickInfo from '../components/HomePageComponents/QuickInfo'
//import Gallery from '../components/HomePageComponents/Gallery'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <BGWrapper>
      <StyledBackgroundSection />
    </BGWrapper>

    <div>
      <p>
        Hello World
        sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
      </p>
    </div>
    {/*<QuickInfo /> 
    <Gallery />*/}
  </Layout>
)

const BGWrapper = styled.div`
  min-height: calc(100vh - 109.5px);
  font-family: 'object-fit: cover; object-position: 50% 50%';
`

export default IndexPage
