import React from "react";

const Lightbox = () => {
  return (
    <div className='lightbox'>
      <div className='lightbox-content'>
        <div className='lightbox-close'>&times;</div>
        <img
          src='images/projects/1.jpg'
          className='lightbox-img'
          onClick={nextItem()}
        />
        <div className='lightbox-caption'>
          <div className='caption-text'></div>
          <div className='caption-counter'></div>
        </div>
      </div>

      <div className='lightbox-controls'>
        <div className='prev-item' onClick={prevItem()}>
          <i className='fa fa-angle-left'></i>
        </div>
        <div className='next-item' onClick={nextItem()}>
          <i className='fa fa-angle-right'></i>
        </div>
      </div>
    </div>
  );
};

export default Lightbox;
