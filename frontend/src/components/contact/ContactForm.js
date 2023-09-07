import React from 'react';
import { BsFillTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="container">
        <div className="contact-form-main">
          <h2 className="contact-head">Get In Touch</h2>
          <form>
            <div className="form-group mb">
              <input type="text" placeholder="Name" />
            </div>
            <div className="form-group mb">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group mb">
              <input type="tel" placeholder="Number" />
            </div>
            <div className="form-group mb">
              <textarea rows={7} placeholder="Your Message" />
            </div>
            <div className="form-group mb">
              <Link to="/form-submission">
                <button>Submit</button>
              </Link>
            </div>
          </form>
        </div>
        <div className="contact-form-info">
          <h2 className="contact-head">Our Contacts</h2>
          <div className="cont-info ">
            <BsFillTelephoneFill />
            <p>+201003802680</p>
          </div>
          <div className="cont-info">
            <BsWhatsapp />
            <p>+201220066112</p>
          </div>
          <div className="cont-info">
            <AiOutlineMail />
            <p>info@saltish.com</p>
          </div>
          <div className="cont-info">
            <HiLocationMarker />
            <p className="p-width">
              Egypt, Cairo, Zahraa El Maadi, Yasmeen Towers, Tower no. 7, 3rd
              Floor
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
