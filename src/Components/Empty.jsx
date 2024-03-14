import { useContext } from "react";
import { TodoItemsContext } from "../Store/todo-item-store";

function Empty() {
  const { todoItem } = useContext(TodoItemsContext);

  return todoItem.length === 0 && <h1>Todo is empty</h1>;
}
export default Empty;
