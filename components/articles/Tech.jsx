import React from 'react'

const Tech = ({ onCloseArticle }) => {
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
      <h2 className='major'>Tech</h2>

      <div className='row'>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/javascript.png' className='image fit'></img>
          <h3 className='align-center'>JavaScript</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/react.png' className='image fit'></img>
          <h3 className='align-center'>React</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/HTML5.png' className='image fit'></img>
          <h3 className='align-center'>HTML5</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/CSS3.png' className='image fit'></img>
          <h3 className='align-center'>CSS3</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/node.png' className='image fit'></img>
          <h3 className='align-center'>Node</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/express.png' className='image fit'></img>
          <h3 className='align-center'>Express</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/mysql.png' className='image fit'></img>
          <h3 className='align-center'>MySQL</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/mongodb.png' className='image fit'></img>
          <h3 className='align-center'>MongoDB</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/next.png' className='image fit'></img>
          <h3 className='align-center'>NextJS</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/angular.png' className='image fit'></img>
          <h3 className='align-center'>Angular8</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/php.png' className='image fit'></img>
          <h3 className='align-center'>PHP</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/auth0.png' className='image fit'></img>
          <h3 className='align-center'>Auth0</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/github.png' className='image fit'></img>
          <h3 className='align-center'>GitHub</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/expo.png' className='image fit'></img>
          <h3 className='align-center'>Expo</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/linux.png' className='image fit'></img>
          <h3 className='align-center'>Linux</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/angularjs.png' className='image fit'></img>
          <h3 className='align-center'>AngularJS</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/reactnative.png' className='image fit'></img>
          <h3 className='align-center'>React Native</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/vscode.png' className='image fit'></img>
          <h3 className='align-center'>VSCode</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/python.png' className='image fit'></img>
          <h3 className='align-center'>Python</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/playwright.png' className='image fit'></img>
          <h3 className='align-center'>Playwright</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/vue.png' className='image fit'></img>
          <h3 className='align-center'>Vue</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/tech/puppeteer.png' className='image fit'></img>
          <h3 className='align-center'>Puppeteer</h3>
        </div>
      </div>
      <Close onCloseArticle={onCloseArticle} />
    </>
  )
}

export default Tech
