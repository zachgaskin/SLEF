import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'

const BWrapper = styled.header`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  position: fixed;
  background-position: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`

const StyledImg = styled(Image)`
  position: absolute;
  top: 0;
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
export default BillboardImg
