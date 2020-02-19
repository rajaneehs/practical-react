import React from "react";
// react-icons
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAlarm } from "react-icons/md";
import { Md3DRotation } from "react-icons/md";

const IconsComponent = () => {
  return (
    <div>
      <IconContext.Provider value={{ color: "blue", size: "8rem" }}>
        {/* <FaReact color='purple' size='8rem' />
      <MdAlarm color='purple' size='8rem' /> */}
        <FaReact />
        <MdAlarm />
        <Md3DRotation color="purple" size="8rem" />
      </IconContext.Provider>
    </div>
  );
};

export default IconsComponent;
