import React from 'react'
import styled from 'styled-components'
import img from '../images/bcg/HeaderHome.svg'

function HomeHeader({img,children}) {
  return <IndexHeader img={img}>
      {children}
  </IndexHeader>
}

const IndexHeader = styled.header`
  min-height: calc(100vh);
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-item: center;
`
HomeHeader.defaultProps = {
  img:img
}

export { HomeHeader }

// url(${props => props.img})