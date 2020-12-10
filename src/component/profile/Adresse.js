import React from "react";

const Adresse = (props) => {
  const { adrs } = props;
  return (
    <div className="container">
      <h1>{adrs}</h1>
    </div>
  );
};

export default Adresse;
