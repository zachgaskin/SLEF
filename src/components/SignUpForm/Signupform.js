import React, { Component } from 'react'
import styled from 'styled-components'

export default class Signupform extends Component {
  render() {
    return (
      <FormWrapper className="gatsby-resp-iframe-wrapper">
        <iframe
          className="iframe_container"
          src="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
          width="850"
          height="850"
          onload="javascript:parent.scrollTo(0,0);"
          allowTransparency="true"
          frameborder="0"
          scrolling="no"
          title="2019 Football & Cheer Registration Copy"
        >
          <a
            href="https://littleeaglefootball.forms-db.com/view.php?id=11477"
            title="2019 Football & Cheer Registration Copy"
          >
            2019 Football & Cheer Registration Copy
          </a>
        </iframe>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div`
  text-align: center;
`
