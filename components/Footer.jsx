import PropTypes from 'prop-types'

const Footer = ({ timeout }) => (
  <footer id='footer' style={timeout ? { display: 'none' } : {}}>
    <p className='copyright'>
      &copy; Marc D. West - {new Date().getFullYear()}. Design:{' '}
      <a href='https://html5up.net' target='_blank'>
        HTML5 UP
      </a>
      . Built with:{' '}
      <a href='https://github.com/zeit/next.js' target='_blank'>
        Next.js
      </a>
      <br />
      Photo Credit:{' '}
      <a href='https://lazyeyephoto.com/' target='_blank'>
        LazyEye Photo
      </a>
    </p>
  </footer>
)

Footer.propTypes = {
  timeout: PropTypes.bool,
}

export default Footer
