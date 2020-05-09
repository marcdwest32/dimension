import PropTypes from 'prop-types';
import Intro from './articles/Intro';
import Work from './articles/Work';
import Tech from './articles/Tech';
import Contact from './articles/Contact';

const Main = ({
  timeout,
  article,
  handleSwitchArticle,
  articleTimeout,
  onCloseArticle,
}) => (
  <div id='main' style={timeout ? { display: 'flex' } : { display: 'none' }}>
    <article
      id='intro'
      className={`${article === 'intro' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <Intro
        handleSwitchArticle={handleSwitchArticle}
        onCloseArticle={onCloseArticle}
      />
    </article>
    <article
      id='work'
      className={`${article === 'work' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <Work onCloseArticle={onCloseArticle} />
    </article>

    <article
      id='tech'
      className={`${article === 'tech' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <Tech onCloseArticle={onCloseArticle} />
    </article>
    <article
      id='contact'
      className={`${article === 'contact' ? 'active' : ''} ${
        articleTimeout ? 'timeout' : ''
      }`}
      style={{ display: 'none' }}
    >
      <Contact onCloseArticle={onCloseArticle} />
    </article>
  </div>
);

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Main;
