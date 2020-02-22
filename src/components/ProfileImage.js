import React from "react";

const ProfileImage = props => {
  //console.log(props)
  return (
    <img
      className="image"
      src={props.image}
      alt="Jane Austin character profiles"
    />
  );
};

export default ProfileImage;
