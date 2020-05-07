import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';

const Header = ({ timeout, onOpenArticle }) => (
  <header id='header' style={timeout ? { display: 'none' } : {}}>
    <div className='logo'>
      <FontAwesomeIcon icon={faCat} transform='grow-36' />
    </div>
    <div className='content'>
      <div className='inner'>
        <h1>Marc D. West</h1>
        <p>
          A fully responsive site template designed by{' '}
          <a href='https://html5up.net'>HTML5 UP</a> and released
          <br />
          for free under the{' '}
          <a href='https://html5up.net/license'>Creative Commons</a> license.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a
            onClick={() => {
              onOpenArticle('intro');
            }}
          >
            Intro
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              onOpenArticle('work');
            }}
          >
            Work
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              onOpenArticle('about');
            }}
          >
            About
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              onOpenArticle('contact');
            }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
