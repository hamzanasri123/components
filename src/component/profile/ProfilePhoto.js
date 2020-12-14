import React from "react";
import "./photo.css";
import PropTypes from "prop-types";
const ProfilePhoto = (props) => {
  const { children, Bio, Prof } = props;
  return (
    <div>
      <div>
        {children}
        <p>{Bio}</p>
      </div>
      <h1>{Prof}</h1>
    </div>
  );

};
ProfilePhoto.propTypes = {
  Bio:PropTypes.string,
};
export default ProfilePhoto;
