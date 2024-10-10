import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

const ButtonComponent = (props) => {
  return (
    <>
      <Button
        as="input"
        type="submit"
        value="Add Task"
        size={props.size}
        variant={props.variant}
        className={props.className}
      />{" "}
    </>
  );
};

export default ButtonComponent;
