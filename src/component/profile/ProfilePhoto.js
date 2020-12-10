import React from "react";
import "./photo.css";
const ProfilePhoto = (props) => {
  const { img } = props;
  return <img src={img} alt="logo" />;
};
export default ProfilePhoto;
