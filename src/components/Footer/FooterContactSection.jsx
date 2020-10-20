import styled from "styled-components"

const FooterContactSection = styled.div`
  grid-column-end: span 4;

  .contact__tagline {
    font-weight: 700;
    font-size: 1rem;
    line-height: 1rem;
    text-transform: uppercase;
    margin: 2rem 0;
  }

  .contact__info {
    font-size: 1.25rem;
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .contact__time {
    margin-left: 2rem;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column-end: span 3;
  }

  @media ${props => props.theme.breakpoints.xs} {
    grid-column-end: span 6;
  }
`

export default FooterContactSection
