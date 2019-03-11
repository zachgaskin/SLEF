import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bcg/mightymite2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        />
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  min-height: calc(100vh - 109.5px);
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  .gatsby-background-image-#{$className}:before {
    background-attachment: fixed;
    background-position: center center;
  }
  .gatsby-background-image-#{$className}:after {
    background-attachment: fixed;
    background-position: center center;
  }
`
export default StyledBackgroundSection
