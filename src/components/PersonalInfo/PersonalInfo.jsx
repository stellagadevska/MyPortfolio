import React from "react";
import InfoItem from "./InfoItem";
import myRes from '../../assets/files/myRes.pdf'

const PersonalInfo = () => {
  const downloadLabel = 'Download CV'
  const hireMeLabel = 'Hire Me'
  const infoItems = [
    {
      itemLabel: "Birthday:",
      itemValue: "9 January 2000",
    },
    {
      itemLabel: "Age:",
      itemValue: "24",
    },
    {
      itemLabel: "Email:",
      itemValue: "stelagadevska@gmail.com",
    },
    {
      itemLabel: "City:",
      itemValue: "Troyan/ Sofia",
    },
    {
      itemLabel: "Bachelor in:",
      itemValue: "Business Informatics",
    },
    {
      itemLabel: "Specializing in:",
      itemValue: "FrontEnd Development",
    },
  ];
  return (
    <div className='personal-info padd-15'>
      <div className='row'>
        {infoItems.map((infoItem) => {
          return (
            <InfoItem
              itemLabel={infoItem.itemLabel}
              itemValue={infoItem.itemValue}
            />
          );
        })}
      </div>

      <div className='row'>
        <div className='buttons padd-15'>
          <a href={myRes} className='btn' download>
            {downloadLabel}
          </a>

          <a
            href='https://www.linkedin.com/in/stela-gadevska/'
            data-section-index='1'
            className='btn hire-me'
          >
            {hireMeLabel}
          </a>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
