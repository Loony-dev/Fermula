import React from 'react';

const CustomCarouselArrow = ({left = true, onClick, ...rest}) => {
  const {
    onMove,
    carouselState: {currentSlide, deviceType}
  } = rest;

  if (left)
    return <i className="custom-left-arrow" onClick={() => onClick()}/>
  else return <i className="custom-right-arrow" onClick={() => onClick()}/>
};

export default React.memo(CustomCarouselArrow);
