import React from 'react'
import styled from 'styled-components'
import { styles } from '../utils'

export default function Banner({ title, subtitle, children }) {
  return (
    <BannerWrapper>
      <h1 className="title">{title}</h1>
      <h3 className="subtitle">{subtitle}</h3>
      {children}
    </BannerWrapper>
  )
}

const BannerWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: auto;
  display: block;
  margin-bottom: 3rem;
  text-align: center;
  .title {
    color: ${styles.colors.mainWhite};
    font-size: 3rem;
    text-transform: uppercase;
    ${styles.letterSpacing({ spacing: '0.35rem' })};
    @media (max-width: 768px) {
      font-size: 2.5rem;
      padding-top: 20px;
    }
    @media (max-width: 572px) {
      font-size: 2rem;
      padding-top: 20px;
    }
    @media (max-width: 472px) {
      font-size: 1.75rem;
      padding-top: 20px;
    }
    @media (max-width: 415px) {
      font-size: 1.5rem;
      padding-top: 100px;
    }
    @media (max-width: 375px) {
      font-size: 1.4rem;
      padding-top: 100px;
    }
    @media (max-width: 325px) {
      font-size: 1.15rem;
      padding-top: 100px;
    }
  }
  .subtitle {
    color: ${styles.colors.mainWhite};
    ${styles.textSlanted};
    ${styles.letterSpacing({ spacing: '0.15rem' })};
    font-size: 1.5rem;
    text-transform: capitalize;
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    @media (max-width: 572px) {
      font-size: 1.2rem;
    }
    @media (max-width: 472px) {
      font-size: 1.1rem;
    }
    @media (max-width: 415px) {
      font-size: 1rem;
    }
    @media (max-width: 325px) {
      font-size: 0.8rem;
    }
  }
`

Banner.defaultProps = {
  title: 'default title',
}
