import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { Section } from '../utils'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Section>
        <div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
