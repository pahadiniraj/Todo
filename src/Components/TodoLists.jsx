import { useContext } from "react";
import styles from "./TodoLists.module.css";
import { TodoItemsContext } from "../Store/todo-item-store";

function TodoLists({ itemName, itemDate }) {
  const handleOnDelete = () => {
    deleteItem(itemName);
  };

  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <>
      <div className={`container text-center ${styles.add} `}>
        <div className="row">
          <div className="col-sm">
            <p>{itemName}</p>
          </div>
          <div className="col-sm">
            <p>{itemDate}</p>
          </div>
          <div className="col-sm">
            <button
              type="button"
              className={`${styles.button}`}
              onClick={handleOnDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default TodoLists;
