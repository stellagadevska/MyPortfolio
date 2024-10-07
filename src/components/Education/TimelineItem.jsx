import React from "react";

const TimelineItem = (props) => {
  return (
    <div className='timeline-item'>
      <div className='circle-dot'></div>
      <h6 className='timeline-date'></h6>
      <i className={props.iconClass}></i> {props.date}
      <h4 className='timeline-title'>{props.title}</h4>
      <h4 className='timeline-place'>{props.place}</h4>
      <p className='timeline-text'>{props.text}</p>
    </div>
  );
};

export default TimelineItem;
