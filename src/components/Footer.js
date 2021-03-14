import React from "react"
import SocialLinks from "../constants/socialLinks"
const Footer = () => {
  return <footer className="footer">
    <div>
      <SocialLinks styleClass="footer-links"></SocialLinks>
      <h4>copyright&copy;{new Date().getFullYear()}</h4>
      <span>Hope You Had A Good Time</span>
    </div>

  </footer>
}

export default Footer
