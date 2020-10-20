import React from "react"

import StoryContainer from "./StoryContainer"
import StoryContent from "./StoryContent"
import StoryInfo from "./StoryInfo"
import StoryImage from "./StoryImage"

const Story = ({ tagline, title, description, image, id }) => {
  return (
    <StoryContainer id={id}>
      <StoryContent>
        <StoryInfo>
          <p className="story__tagline">{tagline}</p>
          <h4 className="story__title">{title} </h4>
          <p className="story__description">{description}</p>
        </StoryInfo>
        <StoryImage fixed={image} />
      </StoryContent>
    </StoryContainer>
  )
}

export default Story
