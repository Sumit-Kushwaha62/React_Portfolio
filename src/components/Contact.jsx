import React from "react";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/sumitkushwaha_2004/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>


          {/* <a href="https://www.google.com" target="_blank" className="items">
            <CiFacebook className="icons" />
          </a> */}


          <a href="https://www.linkedin.com/in/sumit-kushwaha-83b608357/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>



          {/* <a href="https://www.google.com" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a> */}



          <a href="https://github.com/Sumit-Kushwaha62" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="https://mail.google.com/mail/"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
