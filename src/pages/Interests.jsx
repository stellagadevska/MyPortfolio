import React from "react";
import InterestsItem from "../components/InterestsItem";
import "../styles/styles.css";
import "../styles/skins/pink.css";
import "../styles/pages/Interests.css";

const Interests = () => {
  let pageTitle = "Interests";
  let interests = [
    {
      interestName: "Travelling",
      interestDesc:
        "I am a big fan of seeing new places, learning about different cultures. It broadens my knowledge and boosts my mood.",
      iconImg: "fa fa-map-signs",
    },
    {
      interestName: "Theatre",
      interestDesc:
        "I have played in several plays. It was very exciting and uplifting. Acting is a way to get familiar with other personalities.",
      iconImg: "fa fa-ticket",
    },
    {
      interestName: "Web Design and Development",
      interestDesc:
        "I did not separate these two because for me - they are one whole piece. I enjoy doing both.",
      iconImg: "fa fa-laptop",
    },
    {
      interestName: "Audio Books",
      interestDesc:
        "I enjoy listening to books. This way, I avoid wasting my time when driving and learn many new things.",
      iconImg: "fa fa-file-audio-o",
    },
    {
      interestName: "Art",
      interestDesc:
        "I really enjoy playing with colors and creating art. This is a way to express myself and the way I feel.",
      iconImg: "fa fa-paint-brush",
    },
    {
      interestName: "Cooking",
      interestDesc:
        "For me, food is an essential part of feeling good. I believe that making your own food ensures the quality of the food.",
      iconImg: "fa fa-cutlery",
    },
  ];

  return (
    <section className='interests active section' id='interests'>
      <div className='container'>
        <div className='row'>
          <div className='section-title padd-15'>
            <h2>{pageTitle}</h2>
          </div>
        </div>

        <div className='row'>
          {interests.map((interest) => {
            return (
              <InterestsItem
                interestName={interest.interestName}
                interestDesc={interest.interestDesc}
                iconImg={interest.iconImg}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
