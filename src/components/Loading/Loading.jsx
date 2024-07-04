import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <div className="wrapper">
      <div className="main-div">
        <div className="logo-container">
          <img
            src="https://global-mt.ru/local/templates/gmt/img/Logo.svg"
            alt="Loading Logo"
            className="logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
