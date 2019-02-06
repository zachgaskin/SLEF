import React, { Component } from 'react'
import styled from 'styled-components'

export default class Signupform extends Component {
  render() {
    return (
      <div className="gatsby-remark-responsive-iframe">
        <iframe
          src="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
          className="iframe_container"
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
      </div>
    )
  }
}

const FormWrapper = styled.div`
  text-align: center;
  .iframe-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
