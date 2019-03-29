import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'

const StyledImg = styled(Image)`
  position: absolute;
  top: auto;
  left: 0;
  width: 100%;
  z-index: -10;
  height: ${props => props.height || 'auto'};
  
  &> img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props =>
      props.fit || 'cover'} !important; object-position: ${props =>
  props.position || '50% 50%'} !important;'
  }  
  `

const BillboardImg = props => (
  <BWrapper>
    <StyledImg {...props} />
  </BWrapper>
)

const BWrapper = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  padding-top: 100px;
`

export default BillboardImg

export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "bcg/mightymite2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
