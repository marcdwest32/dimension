import PropTypes from 'prop-types'

const Footer = ({ timeout }) => (
  <footer id='footer' style={timeout ? { display: 'none' } : {}}>
    <p className='copyright'>
      &copy; Marc D. West - {new Date().getFullYear()}. Design:{' '}
      <a href='https://html5up.net'>HTML5 UP</a>. Built with:{' '}
      <a href='https://github.com/zeit/next.js'>Next.js</a>
      <br />
      Photo Credit: <a href='https://lazyeyephoto.com/'>LazyEye Photo</a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
