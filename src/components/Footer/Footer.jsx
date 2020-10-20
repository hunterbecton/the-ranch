import React from "react"

import FooterContainer from "./FooterContainer"
import FooterLogoContainer from "./FooterLogoContainer"
import FooterFormContainer from "./FooterFormContainer"
import FooterForm from "./FooterForm"
import FooterContactContainer from "./FooterContactContainer"
import FooterContactSection from "./FooterContactSection"
import FooterCopyrightContainer from "./FooterCopyrightContainer"
import FooterSocial from "./FooterSocial"
import Logo from "../../images/ranch-logo.svg"
import Instagram from "../../images/instagram.svg"
import Facebook from "../../images/facebook.svg"

const Footer = ({ hours, address1, address2, phone, email, copyright, id }) => {
  return (
    <FooterContainer id={id}>
      <FooterLogoContainer>
        <img src={Logo} alt="The Ranch Logo" />
      </FooterLogoContainer>
      <FooterFormContainer>
        <p>Get Taproom updates and more!</p>
        <FooterForm />
      </FooterFormContainer>
      <FooterContactContainer>
        <FooterContactSection>
          <p className="contact__tagline">Hours</p>
          {hours.map((hour, i) => (
            <p className="contact__info" key={i}>
              {hour.day.text}
              <span className="contact__time">{hour.time.text}</span>
            </p>
          ))}
        </FooterContactSection>
        <FooterContactSection>
          <p className="contact__tagline">Address</p>
          <p className="contact__info">{address1}</p>
          <p className="contact__info">{address2}</p>
        </FooterContactSection>
        <FooterContactSection>
          <p className="contact__tagline">Contact</p>
          <p className="contact__info">{phone}</p>
          <p className="contact__info">{email}</p>
        </FooterContactSection>
      </FooterContactContainer>
      <FooterCopyrightContainer>
        <p>{copyright}</p>
        <FooterSocial>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={Instagram} alt="The Ranch Instagram" />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <img src={Facebook} alt="The Ranch Facebooko" />
          </a>
        </FooterSocial>
      </FooterCopyrightContainer>
    </FooterContainer>
  )
}

export default Footer
