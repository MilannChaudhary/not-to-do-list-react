import React from "react";

const HeadingComponentOne = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
    </>
  );
};

const HeadingComponentTwo = ({ props }) => {
  return (
    <>
      <div>
        <h3>{props.name}</h3>
      </div>
    </>
  );
};

export { HeadingComponentOne, HeadingComponentTwo };
