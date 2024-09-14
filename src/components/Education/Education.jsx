import React, { useEffect } from "react";
import TimelineItem from "./TimelineItem";

const Education = () => {
  const certificateItems = [
    {
      date: "December 2021",
      title: "AWS Certified Cloud Practitioner",
      text: "Amazon Web Services (AWS)",
      iconClass: "fa fa-calendar",
    },
    {
      date: "December 2017",
      title: "Certificate in Advanced English",
      text: "Cambridge Assessment English",
      iconClass: "fa fa-calendar",
    },
  ];

  const educationItems = [
    {
      date: "2023-2024",
      title: "Professional Qualification for Pedagogy in IT/ Informatics",
      text: "New Bulgarian University",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2018 - 2023",
      title: "Business Informatics",
      text: "New Bulgarian University",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2020-2022",
      title: "Java Web Development",
      text: "Softuni",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2013 - 2018",
      title: "Language Class",
      text: 'Over the 5 years in High School "Vasil Levski", I studied English and Spanish.',
      iconClass: "fa fa-calendar",
    },
  ];
  return (
    <div className='row'>
      <div className='education padd-15'>
        <h3 className='title'>Education</h3>
        <div className='row'>
          <div className='timeline-box padd-15'>
            <div className='timeline shadow-dark'>
              {/* <!-- Timeline Item --> */}

              {educationItems.map((educationItem) => {
                return (
                  <TimelineItem
                    date={educationItem.date}
                    title={educationItem.title}
                    text={educationItem.text}
                    iconClass={educationItem.iconClass}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Certificates Section --> */}
      <div className='certificates padd-15'>
        <h3 className='title'>Certificates</h3>
        <div className='timeline-box padd-15'>
          <div className='timeline shadow-dark'>
            {certificateItems.map((certificate) => {
              return (
                <div className='timeline-item'>
                  <div className='circle-dot'></div>
                  <h6 className='timeline-date'></h6>
                  <i className={certificate.iconClass}></i> {certificate.date}
                  <h4 className='timeline-title'>{certificate.title}</h4>
                  <p className='timeline-text'>{certificate.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
