import React, { useEffect } from "react";

const Education = () => {
  const certificateItems = [
    {
      date: "December 2021",
      title: "AWS Certified Cloud Practitioner",
      text: "Amazon Web Services (AWS)",
      iconClass: "fa-calendar",
    },
    {
      date: "December 2017",
      title: "Certificate in Advanced English",
      text: "Cambridge Assessment English",
      iconClass: "fa-calendar",
    },
  ];

  const educationItems = [
    {
      date: "2023-2024",
      title: "Professional Qualification for Pedagogy in IT/ Informatics",
      text: "New Bulgarian University",
      iconClass: "fa-calendar",
    },
    {
      date: "2018 - 2023",
      title: "Business Informatics",
      text: "New Bulgarian University",
      iconClass: "fa-calendar",
    },
    {
      date: "2020-2022",
      title: "Java Web Development",
      text: "Softuni",
      iconClass: "fa-calendar",
    },
    {
      date: "2013 - 2018",
      title: "Language Class",
      text: 'Over the 5 years in High School "Vasil Levski", I studied English and Spanish.',
      iconClass: "fa-calendar",
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

              <div className='timeline-item'>
                <div className='circle-dot'></div>
                <h6 className='timeline-date'></h6>
                <i className='fa fa-calendar'></i> 2023-2024
                <h4 className='timeline-title'>
                  Professional Qualification for Pedagogy in IT/ Informatics
                </h4>
                <p className='timeline-text'>New Bulgarian University</p>
              </div>

              <div className='timeline-item'>
                <div className='circle-dot'></div>
                <h6 className='timeline-date'></h6>
                <i className='fa fa-calendar'></i> 2018 - 2023
                <h4 className='timeline-title'>Business Informatics</h4>
                <p className='timeline-text'> New Bulgarian University</p>
              </div>

              <div className='timeline-item'>
                <div className='circle-dot'></div>
                <h6 className='timeline-date'></h6>
                <i className='fa fa-calendar'></i> 2020-2022
                <h4 className='timeline-title'>Java Web Development</h4>
                <p className='timeline-text'> Softuni</p>
              </div>

              <div className='timeline-item'>
                <div className='circle-dot'></div>
                <h6 className='timeline-date'></h6>
                <i className='fa fa-calendar'></i> 2013 - 2018
                <h4 className='timeline-title'>Language Class</h4>
                <p className='timeline-text'>
                  Over the 5 years in High Schhol "Vasil Levski", I studied
                  English and Spanish.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Certificates Section --> */}
      <div className='certificates padd-15'>
        <h3 className='title'>Certificates</h3>
        <div className='timeline-box padd-15'>
          <div className='timeline shadow-dark'>
            {/* <!-- Timeline Item --> */}

            {/* <div className="timeline-item">
                                                <div className="circle-dot"></div>
                                                <h6 className="timeline-date"></h6>
                                                <i className="fa fa-calendar"></i> May 2018
                                                <h4 className="timeline-title"> Rotary Club Year Award </h4>
                                                <p className="timeline-text"> Rotary Club - Award for distinguished students
                                                </p>
                                            </div>  */}

            <div className='timeline-item'>
              <div className='circle-dot'></div>
              <h6 className='timeline-date'></h6>
              <i className='fa fa-calendar'></i> December 2021
              <h4 className='timeline-title'>
                AWS Certified Cloud Practitioner
              </h4>
              <p className='timeline-text'>Amazon Web Services (AWS)</p>
            </div>

            <div className='timeline-item'>
              <div className='circle-dot'></div>
              <h6 className='timeline-date'></h6>
              <i className='fa fa-calendar'></i> December 2017
              <h4 className='timeline-title'>
                Certificate in Advanced English
              </h4>
              <p className='timeline-text'> Cambridge Assessment English</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
