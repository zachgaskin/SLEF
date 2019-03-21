import React from 'react'
import styled from 'styled-components'

export default function Hero({ children }) {
  return <HeroWrapper>{children}</HeroWrapper>
}

const HeroWrapper = styled.div`
  position: relative;
  padding-top: 20;
`
