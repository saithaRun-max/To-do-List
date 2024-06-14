import { useState } from "react";
import "./App.css";
import HomePage from "./components/HomePage";
import userContext from "./utils/userContext";
import useGetFromLocalstorage from "./Hooks/useGetFromLocalstorage";

function App() {
  const [todoList, setTodoList] = useState(useGetFromLocalstorage());
  const [todo, setTodo] = useState("");

  return (
    <>
      <userContext.Provider
        value={{
          todoList,
          setTodoList,
          todo,
          setTodo,
        }}
      >
        <HomePage />
      </userContext.Provider>
    </>
  );
}

export default App;
