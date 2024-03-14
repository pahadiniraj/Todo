import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItem: [],
  addNewItem: () => {},
  deleteItem: () => {},
});

const todoItemsReducer = (currTodoItem, action) => {
  let newTodoItems = currTodoItem;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItem,
      {
        name: action.payLoad.itemName,
        date: action.payLoad.itemDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItem.filter(
      (item) => item.name !== action.payLoad.itemName
    );
  }

  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todoItem, dispatchTodoItem] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDate) => {
    console.log(itemName, itemDate);
    const newItemAction = {
      type: "NEW_ITEM",
      payLoad: {
        itemName,
        itemDate,
      },
    };
    dispatchTodoItem(newItemAction);
  };

  const deleteItem = (itemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payLoad: {
        itemName,
      },
    };
    dispatchTodoItem(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItem,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemsContextProvider;
