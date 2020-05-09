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
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
        <div className='3u 12u$(small)'>
          <img src='/images/react.png' className='image fit'></img>
          <h3 className='align-center'>Tech Name</h3>
        </div>
      </div>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Tech;
