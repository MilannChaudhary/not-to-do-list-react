import Form from "react-bootstrap/Form";

const TextControl = (props) => {
  return (
    <>
      <div className={props.className}>
        <Form.Control size={props.size} type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
};

export default TextControl;
