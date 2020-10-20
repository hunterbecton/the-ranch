import styled from "styled-components"

const HamburgerContainer = styled.div`
  display: none;
  width: calc(60px * 0.6);
  height: calc(45px * 0.6);
  position: absolute;
  top: 4.25rem;
  right: 6.25rem;
  z-index: 6000;
  transform: rotate(0deg);
  transition: 0.5s ease-in-out;
  cursor: pointer;

  &:focus,
  &:focus-within {
    outline: 2px solid ${props => props.theme.colors.orange};
  }

  & span {
    display: block;
    position: absolute;
    height: calc(9px * 0.6);
    width: 100%;
    background: ${props => props.theme.colors.white};
    border-radius: calc(9px * 0.6);
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  & span:nth-child(1) {
    top: 0px;
    transform-origin: left center;
  }

  & span:nth-child(2) {
    top: calc(18px * 0.6);
    transform-origin: left center;
  }

  & span:nth-child(3) {
    top: calc(36px * 0.6);
    transform-origin: left center;
  }

  &.open span:nth-child(1) {
    transform: rotate(45deg);
    top: calc(-3px * 0.6);
    left: calc(8px * 0.6);
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    transform: rotate(-45deg);
    top: calc(39px * 0.6);
    left: calc(8px * 0.6);
  }

  @media only screen and (max-width: 70rem) {
    display: block;
  }

  @media ${props => props.theme.breakpoints.m} {
    right: 3rem;
  }

  @media ${props => props.theme.breakpoints.s} {
    right: 2rem;
  }
`

export default HamburgerContainer
