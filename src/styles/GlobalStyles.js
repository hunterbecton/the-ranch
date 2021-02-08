import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
      font-size: 16px;
      font-weight: 400;
      position: relative;
      margin-left: calc(100vw - 100%);
      margin-right: 0;
    }
    
    html, body {
      font-family: ${props => props.theme.fonts.main};
    }

    body {
      background-color: ${props => props.theme.colors.white};
      overflow-x: hidden;
    }

    a {
        text-decoration: none;
    }

    :focus {
    outline: none;
  }

  @media ${props => props.theme.breakpoints.m} {
    :root {
      font-size: 14px;
    }
  }

  @media ${props => props.theme.breakpoints.s} {
    :root {
      font-size: 12px;
    }
  }

  @media ${props => props.theme.breakpoints.xs} {
    :root {
      font-size: 11px;
    }
  }

`
