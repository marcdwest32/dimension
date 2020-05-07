import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faFacebook,
  faInstagram,
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
      <form method='post' action='#'>
        <div className='field half first'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' id='name' />
        </div>
        <div className='field half'>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' id='email' />
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
          <a href='#'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href='#'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Contact;
