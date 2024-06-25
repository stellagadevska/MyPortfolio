import React from "react";
import profilePicture from "../assets/images/profilePicture.jpg";

const Home = () => {
  let myName = "Stela Gadevska";
  let profession = "FrontEnd Developer";
  let githubURL = "https://github.com/stellagadevska";
  let linkedInURL = "https://www.linkedin.com/in/stela-gadevska/";

  return (
    <section className='home section active' id='home'>
      <div className='container'>
        <div className='intro'>
          <img src={profilePicture} alt='profile' className='shadow-dark' />
          <h1>{myName}</h1>
          <p>{profession}</p>
          <div className='social-links'>
            <a href={githubURL}>
              <i className='fa fa-github'></i>
            </a>

            <a href={linkedInURL}>
              <i className='fa fa-linkedin'></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
