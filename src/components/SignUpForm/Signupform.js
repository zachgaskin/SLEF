import React, { Component } from 'react'
import { Section, Title, SectionButton, styles } from '../../utils'
import styled from 'styled-components'

export default class Signup extends Component {
  render() {
    return (
      <Section>
        <SignupformWrapper>
          <div
            id="mf_placeholder"
            data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
            data-formheight="6315"
            data-formtitle="2019 Football & Cheer Registration Copy"
            data-paddingbottom="10"
          />
          <script>
            (function(f,o,r,m){(r = f.createElement('script'))}
            r.async=1;r.src=o+'js/mf.js'; m=f.getElementById('mf_placeholder');
            m.parentNode.insertBefore(r, m);
            })(document,'https://littleeaglefootball.forms-db.com/');
          </script>
        </SignupformWrapper>
      </Section>
    )
  }
}
const SignupformWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 2rem auto;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
