import React from 'react'
import Image from 'gatsby-image'
import styled from 'styled-components'

const StyledImg = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};
  &> img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
    font-family: 'object-fit: ${props =>
      props.fit || 'cover'} !important; object-position: ${props =>
  props.position || '50% 50%'} !important;'
  }
`

const BWrapper = styled.header`
  min-height: calc(100vh - 109.5px);
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BillboardImg = props => (
  <BWrapper>
    <StyledImg {...props} />
  </BWrapper>
)
export default BillboardImg
