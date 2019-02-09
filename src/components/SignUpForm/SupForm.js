import React, { Component } from 'react'
import { Section } from '../../utils'

export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        dangerouslySetInnerHTML={{ __html: `<div> '/machform.html' </div>` }}
      </Section>
    )
  }
}
