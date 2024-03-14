import { useContext, useState } from "react";
import styles from "./AddTodo.module.css";
import { TodoItemsContext } from "../Store/todo-item-store";

function AddTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setTodoDate] = useState("");

  const { addNewItem } = useContext(TodoItemsContext);
  let handleOnClick = () => {
    addNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  let handleNameChange = (event) => {
    console.log(event.target.value);
    setTodoName(event.target.value);
  };

  let handleDateChange = (event) => {
    console.log(event.target.value);
    setTodoDate(event.target.value);
  };
  return (
    <>
      <div className={`container text-center ${styles.add} `}>
        <div className="row">
          <div className="col-sm">
            <input
              type="text"
              placeholder="Enter Todo List"
              onChange={handleNameChange}
              value={todoName}
            ></input>
          </div>
          <div className="col-sm">
            <input
              type="date"
              onChange={handleDateChange}
              value={todoDate}
            ></input>
          </div>
          <div className="col-sm">
            <button onClick={handleOnClick} className={`${styles.button} `}>
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
