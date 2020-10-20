import React, { Fragment } from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const StoryImageContainer = styled.div`
  grid-column: 7 / span 6;
  height: 30.5rem;
  position: relative;

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 1 / span 6;
    margin: 3rem 0;
  }
`

const StoryImage = ({ fixed }) => {
  const data = useStaticQuery(graphql`
    query {
      imageSharp(fixed: { originalName: { eq: "bar.jpg" } }) {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
  `)

  return (
    <StoryImageContainer>
      <Img
        fixed={fixed ? fixed : data.imageSharp.fixed}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        loading="auto"
      />
    </StoryImageContainer>
  )
}

export default StoryImage
