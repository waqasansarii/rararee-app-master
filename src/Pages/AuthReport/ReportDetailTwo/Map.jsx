import React from "react";

const Map = () => {
  return (
    <div>
      <div style={{width:" 100%"}}>
        <iframe
          width="100%"
          height="500"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=p&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
        {/* <a href="https://www.maps.ie/draw-radius-circle-map/">
          Easy radius map
        </a> */}
      </div>
    </div>
  );
};

export default Map;
