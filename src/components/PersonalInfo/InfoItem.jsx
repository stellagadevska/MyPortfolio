import React from "react";

const InfoItem = (props) => {
  return (
    <div className='info-item padd-15'>
      <p>
        {props.itemLabel} <span>{props.itemValue}</span>
      </p>
    </div>
  );
};

export default InfoItem;
