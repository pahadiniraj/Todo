import TodoName from "./Components/TodoName";
import AddTodo from "./Components/AddTodo";
import TodoList from "./Components/TodoList";
import Empty from "./Components/Empty";
import TodoItemsContextProvider from "./Store/todo-item-store";

function App() {
  return (
    <TodoItemsContextProvider>
      <TodoName></TodoName>
      <AddTodo></AddTodo>
      <Empty></Empty>
      <TodoList></TodoList>
    </TodoItemsContextProvider>
  );
}

export default App;
