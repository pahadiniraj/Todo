import TodoLists from "./TodoLists";
import { TodoItemsContext } from "../Store/todo-item-store";
import { useContext } from "react";
function TodoList() {
  const { todoItem } = useContext(TodoItemsContext);

  return (
    <>
      {todoItem.map((item) => (
        <TodoLists
          key={item.name}
          itemName={item.name}
          itemDate={item.date}
        ></TodoLists>
      ))}
    </>
  );
}
export default TodoList;
