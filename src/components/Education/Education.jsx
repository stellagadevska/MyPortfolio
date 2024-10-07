import React from "react";
import TimelineItem from "./TimelineItem";

const Education = () => {
  const educationItems = [
    {
      date: "2024-ongoing",
      title: "Artificial Intelligence",
      place: "Sofia University",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2023-2024",
      title: "Professional Qualification for Pedagogy in IT/ Informatics",
      place: "New Bulgarian University",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2018 - 2023",
      title: "Business Informatics",
      place: "New Bulgarian University",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2020-2022",
      title: "Java Web Development",
      place: "Softuni",
      iconClass: "fa fa-calendar",
    },
    {
      date: "2013 - 2018",
      title: "Language Class",
      place: 'Vasil Levski Secondary School',
      text: 'Bulgarian - Native/ English - C1/ Spanish - A2',
      iconClass: "fa fa-calendar",
    },
  ];

  const certificateItems = [
    {
      date: "December 2021",
      title: "AWS Certified Cloud Practitioner",
      place: "Amazon Web Services (AWS)",
      iconClass: "fa fa-calendar",
    },
    {
      date: "December 2017",
      title: "Certificate in Advanced English",
      place: "Cambridge Assessment English",
      iconClass: "fa fa-calendar",
    },
  ];

  const workItems = [
    {
      date: "June 2021 - present",
      title: "Front End Software Developer",
      place: "Amdocs",
      iconClass: "fa fa-calendar",
    },
    {
      date: "March 2021 - June 2021",
      title: "Software Developer Intern",
      place: "Amdocs",
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
              {educationItems.map((educationItem) => {
                return (
                  <TimelineItem
                    date={educationItem.date}
                    title={educationItem.title}
                    place={educationItem.place}
                    text={educationItem.text}
                    iconClass={educationItem.iconClass}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className='certificates padd-15'>
        <h3 className='title'>Work</h3>
        <div className='timeline-box padd-15'>
          <div className='timeline shadow-dark'>
            {workItems.map((workItem) => {
              return (
                <TimelineItem
                  date={workItem.date}
                  title={workItem.title}
                  place={workItem.place}
                  text={workItem.text}
                  iconClass={workItem.iconClass}
                />
              );
            })}
          </div>
        </div>

        <h3 className='title certificates-margin'>Certificates</h3>
        <div className='timeline-box padd-15'>
          <div className='timeline shadow-dark'>
            {certificateItems.map((certificate) => {
              return (
                <TimelineItem
                  date={certificate.date}
                  title={certificate.title}
                  place={certificate.place}
                  text={certificate.text}
                  iconClass={certificate.iconClass}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
