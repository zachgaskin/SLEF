import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BillboardImg from './billboard'

const ContactBGI = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bcg/undercenter2.jpg" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 6000) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => <BillboardImg fluid={data.desktop.childImageSharp.fluid} />}
  />
)
export default ContactBGI
