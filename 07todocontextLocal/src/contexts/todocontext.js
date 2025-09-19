import { useContext, createContext } from "react";
export const todocontext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (todo, id) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(todocontext);
};
export const TodoProvider = todocontext.Provider;
