import React from 'react';

const Work = ({ onCloseArticle }) => {
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
      <h2 className='major'>Work</h2>
      <span className='image main'>
        <img src=' /images/pic02.jpg' alt='' />
      </span>
      <p>
        Adipiscing magna sed dolor elit. Praesent eleifend dignissim arcu, at
        eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi,
        fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec
        lorem luctus ultrices.
      </p>
      <p>
        Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero.
        Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque
        condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa
        vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem
        consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna
        magna sed nunc rhoncus amet feugiat tempus.
      </p>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Work;
