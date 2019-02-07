import React, { Component } from 'react'
import styled from 'styled-components'
import { Helmet } from 'react-helmet'

export default class SupForm extends Component {
  render() {
    return (
      <FormWrapper>
        <div
          id="mf_placeholder"
          data-formurl="https://littleeaglefootball.forms-db.com/embed.php?id=11477"
          data-formheight="6315"
          data-formtitle="2019 Football & Cheer Registration Copy"
          data-paddingbottom="10"
        />
        <script>
          {(function(f, o, r, m) {
            r = f.createElement('script')
            r.async = 1
            r.src = o + 'js/mf.js'
            m = f.getElementById('mf_placeholder')
            m.parentNode.insertBefore(r, m)
          })(document, 'https://littleeaglefootball.forms-db.com/')}
        </script>
      </FormWrapper>
    )
  }
}

const FormWrapper = styled.div``
