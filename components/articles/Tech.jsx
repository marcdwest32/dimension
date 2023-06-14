import React from 'react'
const images = [
  'javascript',
  'typescript',
  'php',
  'python',
  'HTML5',
  'CSS3',
  'mysql',
  'mongodb',
  'react',
  'next',
  'reactnative',
  'expo',
  'angularjs',
  'vuejs',
  'node',
  'express',
  'vscode',
  'github',
  'linux',
  'auth0',
  'playwright',
  'puppeteer',
]

const Tech = ({ onCloseArticle }) => {
  const Close = ({ onCloseArticle }) => (
    <div
      className='close'
      onClick={() => {
        onCloseArticle()
      }}
    ></div>
  )

  const tech = images.map((image, i) => (
    <div className='3u 12u$(small)' key={i}>
      <img src={`/images/tech/${image}.png`} className='image fit' id={i}></img>
      <h3 className='align-center'>{image}</h3>
    </div>
  ))

  return (
    <>
      <h2 className='major'>Tech</h2>
      <div className='row'>{tech}</div>
      <Close onCloseArticle={onCloseArticle} />
    </>
  )
}

export default Tech
