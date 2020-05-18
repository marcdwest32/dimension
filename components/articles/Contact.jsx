import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Contact = ({ onCloseArticle }) => {
  const Close = ({ onCloseArticle }) => (
    <div
      className='close'
      onClick={() => {
        onCloseArticle();
      }}
    ></div>
  );

  return (
    <>
      <h2 className='major'>Contact</h2>
      <form action='https://formspree.io/xnqgnrdz' method='POST'>
        <div className='field half first'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='field half'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' />
        </div>
        <div className='field'>
          <label htmlFor='company'>Company</label>
          <input type='text' name='company' id='company' />
        </div>
        <div className='field'>
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' rows='4'></textarea>
        </div>
        <ul className='actions'>
          <li>
            <input type='submit' value='Send Message' className='special' />
          </li>
          <li>
            <input type='reset' value='Reset' />
          </li>
        </ul>
      </form>
      <ul className='icons'>
        <li>
          <a href='https://github.com/marcdwest32' target='_blank'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/marcdwest/' target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href='https://www.instagram.com/swarms_indecent/' target='_blank'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Contact;
