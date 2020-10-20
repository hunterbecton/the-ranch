import React from "react"

import EventsContainer from "./EventsContainer"
import EventInfo from "./EventInfo"
import EventCards from "./EventCards"
import EventCardRatioBox from "./EventCardRatioBox"
import EventCard from "./EventCard"
import ButtonLink from "../Button/ButtonLink"
import EventButtonContainer from "./EventButtonContainer"

const Events = ({ tagline, title, events, id }) => {
  return (
    <EventsContainer id={id}>
      <EventInfo>
        <p className="event__tagline">{tagline}</p>
        <h4 className="event__title">{title} </h4>
      </EventInfo>
      <EventCards>
        {events.map((event, i) => (
          <EventCardRatioBox key={i}>
            <EventCard
              href={event.url.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <p className="event__date">{event.date}</p>
              <p className="event__item">{event.title3.text}</p>
            </EventCard>
          </EventCardRatioBox>
        ))}
      </EventCards>
      <EventButtonContainer>
        <ButtonLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          View All
        </ButtonLink>
      </EventButtonContainer>
    </EventsContainer>
  )
}

export default Events
