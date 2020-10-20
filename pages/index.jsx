import React, { useEffect, useContext, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const IndexPage = ({ timeoutId }) => {
  const [loading, setLoading] = useState('is-loading');
  const [timedout, isTimedout] = useState(false);
  const [article, setArticle] = useState('');
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [isArticleVisible, setIsArticleVisible] = useState(false);

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setLoading('');
    }, 100);
  });

  const handleOpenArticle = article => {
    setArticle(article);
    setIsArticleVisible(!isArticleVisible);

    setTimeout(() => {
      isTimedout(!timedout);
    }, 325);

    setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    setTimeout(() => {
      isTimedout(!timedout);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  };

  const handleSwitchArticle = article => {
    setArticleTimeout(false);

    setTimeout(() => {
      isTimedout(false);
    }, 325);

    setTimeout(() => {
      setIsArticleVisible(false);
      setArticle('');
    }, 350);

    setTimeout(() => {
      setArticle(article);
      setIsArticleVisible(true);
      isTimedout(true);
    }, 650);

    setTimeout(() => {
      setArticleTimeout(true);
    }, 700);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div>
        <Head>
          <title>Marc D. West</title>
          <link
            href='https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i'
            rel='stylesheet'
          />
        </Head>

        <div id='wrapper'>
          <Header onOpenArticle={handleOpenArticle} timeout={timedout} />
          <Main
            timeout={timedout}
            articleTimeout={articleTimeout}
            article={article}
            handleSwitchArticle={handleSwitchArticle}
            onCloseArticle={handleCloseArticle}
          />
          <Footer timeout={timedout} />
        </div>

        <div id='bg' />
      </div>
    </div>
  );
};

export default IndexPage;
