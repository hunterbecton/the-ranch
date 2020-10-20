import React, { Fragment } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const MenuImageContainer = styled.div`
  grid-column: 1 / span 7;
  height: 42rem;
  position: relative;

  @media ${props => props.theme.breakpoints.m} {
    display: none;
  }
`

const MenuImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "beer.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <MenuImageContainer>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </MenuImageContainer>
  )
}

export default MenuImage
