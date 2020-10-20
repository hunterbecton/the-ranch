import styled from "styled-components"

const FooterFormContainer = styled.div`
  grid-column: 4 / span 8;
  display: flex;
  flex-direction: column;

  & > p {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.75rem;
    margin: 0 auto 3rem auto;
  }

  .form--error {
    font-size: 1rem;
    line-height: 1.25rem;
    color: ${props => props.theme.colors.orange};
    font-weight: 400;
  }

  @media ${props => props.theme.breakpoints.m} {
    grid-column: 2 / span 6;
  }
`

export default FooterFormContainer
