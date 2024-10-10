import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeadingComponentOne, HeadingComponentTwo } from "./components/heading";
import ButtonComponent from "./components/buttons";
import TextControl from "./components/input";
import ListComponent from "./components/list";
import Form from "./components/form";
import { useState } from "react";

const hrPerWek = 24 * 7;
function App() {
  const [taskList, setTaskList] = useState([]);
  const ttlHr = taskList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);

  const addTaskList = (taskObj) => {
    const obj = {
      ...taskObj,
      id: randomIdGenerator(),
      type: "entry",
    };

    if (ttlHr + taskObj.hr > hrPerWek) {
      return alert("Sorry Boss not enought time fit this task from last week.");
    }

    setTaskList([...taskList, obj]);
  };

  const switchTask = (id, type) => {
    setTaskList(
      taskList.map((item) => {
        if (item.id === id) {
          item.type = type;
        }

        return item;
      })
    );
  };

  const randomIdGenerator = (lenght = 6) => {
    const str = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";

    let id = "";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * str.length);
      id += str[randomIndex];
    }

    return id;
  };

  const handleOnDelete = (id) => {
    if (window.confirm("Are you sure, you want to delete this?")) {
      setTaskList(taskList.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <div className="container-fluid wrapper">
        <div className="container text-center p-5">
          <HeadingComponentOne name="NOT TO DO LIST" />
        </div>
        {/* <div className="container bg-transparent border border-dark-subtle shadow rounded-pill class">
            <div className="row p-5 g-3">
              <TextControl className="col-md-7" size="md" placeholder="Task" type="text" />
              <TextControl className="col-md-2" size="md" placeholder="0" type="number" />
              <ButtonComponent className="col-md-3 d-grid" size="md" />
            </div> */}
            
        <Form addTaskList={addTaskList} />

        <ListComponent taskList={taskList} switchTask={switchTask} handleOnDelete={handleOnDelete} />

        <div className="alert alert-success">
          The total hours allocated = <span id="ttlHrs">{ttlHr}</span> hrs
        </div>
      </div>
    </>
  );
}

export default App;
