import React, { Component } from 'react'
import { Section, Title, SectionButton, styles } from '../../utils'
import styled from 'styled-components'
import { Link } from 'gatsby'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="Let Us Tell You" title="Our Mission" />
        <QuickInfoWrapper>
          <p className="text">
            Our mission is to provide high level developmental football and
            cheer programs.
          </p>
          <Link to="/about/" style={{ textDecoration: 'none' }}>
            <SectionButton style={{ margin: '2rem auto' }}>About</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
