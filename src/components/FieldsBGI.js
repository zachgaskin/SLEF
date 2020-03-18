import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import BillboardImg from '../components/billboard'

const FieldsBGI = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bcg/Turf.jpg" }) {
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
export default FieldsBGI
