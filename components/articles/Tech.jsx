import React from 'react';

const Tech = ({ onCloseArticle }) => {
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
      <h2 className='major'>Tech</h2>
      <span className='image main'>
        <img src=' /images/pic03.jpg' alt='' />
      </span>
      <div className='row'>
        <div className='3u 12u$(small)'>
          <img src='/images/javascript.png' className='image fit'></img>
          <h3 className='align-center'>JavaScript</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>React</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/HTML5.png' className='image fit'></img>
          <h3 className='align-center'>HTML5</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/CSS3.png' className='image fit'></img>
          <h3 className='align-center'>CSS3</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/node.png' className='image fit'></img>
          <h3 className='align-center'>Node</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/express.png' className='image fit'></img>
          <h3 className='align-center'>Express</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/mysql.png' className='image fit'></img>
          <h3 className='align-center'>MySQL</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/mongodb.png' className='image fit'></img>
          <h3 className='align-center'>MongoDB</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/next.png' className='image fit'></img>
          <h3 className='align-center'>NextJS</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/angular.png' className='image fit'></img>
          <h3 className='align-center'>Angular8</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/auth0.png' className='image fit'></img>
          <h3 className='align-center'>Auth0</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/github.png' className='image fit'></img>
          <h3 className='align-center'>GitHub</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/expo.png' className='image fit'></img>
          <h3 className='align-center'>Expo</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/linux.png' className='image fit'></img>
          <h3 className='align-center'>Linux</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/angularjs.png' className='image fit'></img>
          <h3 className='align-center'>AngularJS</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/reactnative.png' className='image fit'></img>
          <h3 className='align-center'>React Native</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/vscode.png' className='image fit'></img>
          <h3 className='align-center'>VSCode</h3>
        </div>
      </div>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Tech;
