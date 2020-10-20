import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"

import "../fragments/homepageFragment"
import Seo from "../components/Seo/Seo"
import Layout from "../components/Layout/Layout"
import MobileNav from "../components/Mobile/MobileNav"
import Hero from "../components/Hero/Hero"
import Story from "../components/Story/Story"
import Menu from "../components/Menu/Menu"
import Events from "../components/Events/Events"
import Footer from "../components/Footer/Footer"
import Hamburger from "../components/Mobile/Hamburger"

export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      ...HomepageData
    }
  `)

  const [isMobileOpen, setMobileOpen] = useState(false)

  const content = data.allPrismicHomepage.edges[0].node.data

  return (
    <Layout withNav={false}>
      <Seo />
      <Hamburger setMobileOpen={setMobileOpen} isMobileOpen={isMobileOpen} />
      <MobileNav isMobileOpen={isMobileOpen} />
      <Hero
        setMobileOpen={setMobileOpen}
        isMobileOpen={isMobileOpen}
        text={content.hero_text.text}
        image={content.feature_image.localFile.childImageSharp.fixed}
      />
      <Story
        id="story"
        tagline={content.tagline.text}
        title={content.title.text}
        description={content.description.text}
        image={content.feature_image1.localFile.childImageSharp.fixed}
      />
      <Menu
        id="menu"
        tagline={content.tagline1.text}
        title={content.title1.text}
        image={content.feature_image2.localFile.childImageSharp.fixed}
        coffees={content.coffee}
        pastries={content.pastries}
        beers={content.beer}
        snacks={content.snacks}
      />
      <Events
        id="events"
        tagline={content.tagline2.text}
        title={content.title2.text}
        events={content.events}
      />
      <Footer
        hours={content.hours}
        address1={content.address_line_1.text}
        address2={content.address_line_2.text}
        phone={content.phone.text}
        email={content.email.text}
        copyright={content.copyright.text}
        id="hours"
      />
    </Layout>
  )
}
