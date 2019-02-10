import React, { Component, Fragment } from 'react'
import { Section } from '../../utils'
import htmlContent from '../SignUpForm/machform.html'
import createReactClass from 'create-react-class'

const MyComponent = createReactClass({
  render() {
    return (
      <Section>
        <iframe>
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </iframe>
      </Section>
    )
  },
})
export default MyComponent
