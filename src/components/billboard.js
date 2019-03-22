import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

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
    {props.children}
  </BWrapper>
)

const BWrapper = styled.header`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  padding-top: 100px;
`

export default BillboardImg
