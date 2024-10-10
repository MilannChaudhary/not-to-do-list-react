import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const ListComponent = ({ taskList, switchTask, handleOnDelete }) => {
  const entryList = taskList.filter((item) => item.type === "entry") || [];
  const badList = taskList.filter((item) => item.type === "bad") || [];
  return (
    <>
      <div className="row mt-5">
        <div className="col-md">
          <h3 className="text-center">Entry List</h3>
          <hr />
          {/* <!-- Entry list table  --> */}
          <table className="table table-striped table-hover border">
            <tbody id="entryList">
              {entryList.map((item, i) => {
                return (
                  <tr key={item.id}>
                    <td>{i + 1}</td>
                    <td>{item.task}</td>
                    <td>{item.hr}hr</td>
                    <td className="text-end">
                      <button onClick={() => handleOnDelete(item.id)} className="btn btn-danger">
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                      <button onClick={() => switchTask(item.id, "bad")} className="btn btn-success">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-md">
          <h3 className="text-center">Bad List</h3>
          <hr />

          {/* <!-- Bad List table --> */}
          <table className="table table-striped table-hover border">
            <tbody id="badList">
              {badList.map((item, i) => (
                <tr key={item.id}>
                  <td>{i + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.hr}hr</td>
                  <td className="text-end">
                    <button onClick={() => switchTask(item.id, "entry")} className="btn btn-warning">
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    <button onClick={() => handleOnDelete(item.id)} className="btn btn-danger">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="alert alert-success">
            You could have saved = <span id="savedHrsElm">{badList.reduce((acc, i) => acc + i.hr, 0)}</span> hr
          </div>
        </div>
      </div>
    </>
  );
};

export default ListComponent;
