import React from 'react'

const Work = ({ onCloseArticle }) => {
  const Close = ({ onCloseArticle }) => (
    <div
      className='close'
      onClick={() => {
        onCloseArticle()
      }}
    ></div>
  )

  return (
    <>
      <h2 className='major'>Projects</h2>

      <h3>
        <a href='https://coffee-connoisseur-rust.vercel.app/' target='_blank'>
          Coffee Connoisseur
        </a>
      </h3>
      <h4>
        <a
          href='https://github.com/marcdwest32/coffee-connoisseur'
          target='_blank'
        >
          marcdwest32/coffee-connoisseur
        </a>
      </h4>
      <h4>
        Coffee Connoisseur is a Next.js web application that provides a
        user-friendly interface to explore coffee stores, find nearby locations,
        and view detailed information about each store. It incorporates state
        management, data fetching, responsive design, and dynamic routing to
        deliver a smooth and engaging user experience.
      </h4>
      <span className='image main'>
        <img src=' /images/work/cc-header.png' alt='' />
      </span>
      <ul>
        <li>Technology Stack: Next.js (React framework)</li>
        <li>
          API Integration: Utilizes the Yelp API to retrieve data about coffee
          stores
        </li>
        <li>Pages and Components: Multiple pages and reusable components</li>
        <li>Data Fetching: 'getStaticProps' for fetching coffee store data</li>
        <li>
          State Management: Custom state management with 'useContext' and
          'useReducer'
        </li>
        <li>
          Location Tracking: Feature to find coffee stores near the user's
          location
        </li>
        <li>
          Dynamic Routing: Supports dynamic routing for coffee store pages
        </li>
        <li>Responsive Design: CSS media queries for responsive layouts</li>
        <li>Styling: CSS modules for component-specific styling</li>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/cc1.png' className='image fit'></img>
          </div>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/cc2.png' className='image fit'></img>
          </div>
        </div>
      </ul>
      <hr size={5} />
      <h3>MapChat</h3>
      <h4>Mobile Map-Based Messaging App</h4>
      <span className='image main'>
        <img src=' /images/work/mapchat-header.png' alt='' />
      </span>
      <ul>
        <li>
          Maintained user security via OAuth 2.0 along with Google third-party
          sign in to validate users' identity
        </li>
        <li>
          Leveraged onboard location services and Google Maps API to dynamically
          render messages for others to interact with
        </li>
        <li>
          Used Expo SDK to create Android, iOS, and web app from a single
          codebase
        </li>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat1.jpg' className='image fit'></img>
          </div>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat2.png' className='image fit'></img>
          </div>
        </div>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat3.png' className='image fit'></img>
          </div>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat4.png' className='image fit'></img>
          </div>
        </div>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat5.png' className='image fit'></img>
          </div>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat6.png' className='image fit'></img>
          </div>
        </div>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat7.jpg' className='image fit'></img>
          </div>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat8.png' className='image fit'></img>
          </div>
        </div>
        <div className='row'>
          <div className='6u 12u$(medium)'>
            <img src='/images/work/mapchat9.png' className='image fit'></img>
          </div>
        </div>
      </ul>
      <hr size={5} />
      <h3>Headwaters</h3>
      <h4>Self-Care and Wellness Management App</h4>
      <span className='image main'>
        <img src=' /images/work/hw-header.png' alt='' />
      </span>
      <ul>
        <li>Utilized Auth0 to manage third-party authentication via Google</li>
        <li>Optimized single-page web application using React Router</li>
        <li>
          Architected server/client communications using ExpressJS and Axios
        </li>
        <li>
          Employed AWS EC2 instance for deployment, utilizing PM2 and NGINX to
          facilitate persistent server and optimize memory use
        </li>
        <div className='row'>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwcalendar1.png' className='image fit'></img>
          </div>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwcalendar2.png' className='image fit'></img>
          </div>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwpillbox.png' className='image fit'></img>
          </div>
          <div className='12u 12u$(large)'>
            <img
              src='/images/work/hwmedtracker.png'
              className='image fit'
            ></img>
          </div>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwjournal1.png' className='image fit'></img>
          </div>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwjournal2.png' className='image fit'></img>
          </div>
          <div className='12u 12u$(large)'>
            <img src='/images/work/hwjournal3.png' className='image fit'></img>
          </div>
        </div>
      </ul>
      <hr size={5} />
      <h3>Where Should We Eat?</h3>
      <h4>Gamified App to Help Friends Choose Local Restaurants</h4>
      <span className='image main'>
        <img src=' /images/pic02.jpg' alt='' />
      </span>
      <ul>
        <li>
          Created a distinct visual style using Material Design and ReactJS
        </li>
        <li>
          Constructed API calls to efficiently send & retrieve necessary data
        </li>
        <li>
          Used Google Cloud Deployment Manager to allocate resources and manage
          deployment processes
        </li>
      </ul>
      <Close onCloseArticle={onCloseArticle} />
    </>
  )
}

export default Work
