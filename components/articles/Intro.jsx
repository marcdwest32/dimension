import React from 'react';

const Intro = ({ handleSwitchArticle, onCloseArticle }) => {
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
      <h2 className='major'>Intro</h2>
      <span className='image main'>
        <img src='/images/pic01.jpg' alt='' />
      </span>
      <h3>Hello. I am Marc D. West.</h3>
      <p>
        I am a software engineer/full-stack web developer from New Orleans, La.
        I have a passion for creative problem-solving and outside-the-box
        thinking. My many years of professional and managerial experience have
        taught me the value of both teams working together to build something
        that is greater than the sum of its parts and of strong leadership to
        guide the ship and keep everyone on the right path.
      </p>
      <p>
        I have experience developing applications for the web and for mobile
        using modern, front-end frameworks such as React, Angular8, and React
        Native, as well as legacy frameworks such as AngularJS, Bootstrap, and
        jQuery. I also have experience designing and developing application back
        ends including RESTful APIs with relational (SQL) and document-based
        (noSQL) databases like mongoDB. I use the best tools available to get my
        work done: Linux with Bash, source version control with git and GitHub,
        and powerful IDEs like VSCode. I am always seeking new and exciting
        challenges in both my professional and personal life. Feel free to check
        out my <a onClick={() => handleSwitchArticle('work')}>awesome work</a>.
      </p>
      <Close onCloseArticle={onCloseArticle} />
    </>
  );
};

export default Intro;
