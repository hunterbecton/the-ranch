import React, { Fragment } from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const HeroImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "cattle.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <Fragment>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        className="hero__image"
        loading="auto"
      />
    </Fragment>
  )
}

export default HeroImage
