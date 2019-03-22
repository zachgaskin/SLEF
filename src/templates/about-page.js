import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import BillboardImg from '../components/billboard'
import { Section, Hero, Banner } from '../utils'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Hero>
        <BillboardImg fluid={props.data.desktop.childImageSharp.fluid} />
        <Banner title="ABOUT US" subtitle="Youth Football & Cheer" />
      </Hero>
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
export const pageQuery = graphql`
  query {
    desktop: file(relativePath: { eq: "bcg/muddybuddy2.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 6000) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
