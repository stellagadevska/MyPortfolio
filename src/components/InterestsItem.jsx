import React from "react";

const InterestsItem = (props) => {
  return (
    <div class='interests-item padd-15'>
      <div class='interests-item-inner'>
        <div class='icon'>
          <i class={props.iconImg}></i>
        </div>
        <h4>{props.interestName}</h4>
        <p>{props.interestDesc}</p>
      </div>
    </div>
  );
};

export default InterestsItem;
