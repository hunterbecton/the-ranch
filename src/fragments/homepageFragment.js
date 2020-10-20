export const homepageFragment = graphql`
  fragment HomepageData on Query {
    allPrismicHomepage {
      edges {
        node {
          id
          data {
            hero_text {
              text
            }
            tagline {
              text
            }
            title {
              text
            }
            description {
              text
            }
            tagline1 {
              text
            }
            title1 {
              text
            }
            beer {
              brewery {
                text
              }
              title1 {
                text
              }
              type
            }
            pastries {
              title1 {
                text
              }
              price
            }
            snacks {
              title1 {
                text
              }
              price
            }
            coffee {
              title1 {
                text
              }
              price
            }
            tagline2 {
              text
            }
            title2 {
              text
            }
            events {
              date(formatString: "MMMM DD")
              title3 {
                text
              }
              url {
                url
              }
            }
            copyright {
              text
            }
            address_line_1 {
              text
            }
            address_line_2 {
              text
            }
            email {
              text
            }
            hours {
              day {
                text
              }
              time {
                text
              }
            }
            phone {
              text
            }
            feature_image {
              localFile {
                childImageSharp {
                  fixed(quality: 85) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            feature_image1 {
              localFile {
                childImageSharp {
                  fixed(quality: 85) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
            feature_image2 {
              localFile {
                childImageSharp {
                  fixed(quality: 85) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
