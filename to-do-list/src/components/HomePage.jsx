import { useEffect, useContext } from "react";
import userContext from "../utils/userContext";
import useHandleDelete from "../Hooks/useHandleDelete";
import useHandleEdit from "../Hooks/useHandleEdit";
import useHandleSubmit from "../Hooks/useHandleSubmit";
import useSendToLS from "../Hooks/useSendToLS";

const HomePage = () => {
  const { todoList, setTodoList, todo, setTodo } = useContext(userContext);

  useEffect(() => {
    useSendToLS(todoList);
  }, [todoList]);

  const handleSubmit = (e) => {
    if (todo == "") {
      alert("Field can not be blank");
    } else {
      e.preventDefault();
      const newTodo = useHandleSubmit(todoList, todo);
      setTodoList(newTodo);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const filtered = useHandleDelete(todoList, id);
    setTodoList(filtered);
  };

  const handleEdit = (i) => {
    const edited = useHandleEdit(todoList, i);
    setTodoList(edited);
  };

  return (
    <>
      <div className="bg-gray-50 h-full w-screen mx-auto">
        <div className="w-[50%] min-h-full mx-auto m-6 p-5 pb-20 bg-zinc-200 rounded-md ">
          <div className="px-[20%]">
            <div>
              <h1 className="text-xl text-center font-bold">
                To-Do Application
              </h1>
              <hr className="border-gray-400 border-b-2 my-4" />
            </div>
            <form
              autoComplete="off"
              className="mx-auto flex align-middle justify-between "
              onSubmit={handleSubmit}
            >
              <input
                required
                type="text"
                placeholder=" Add Task"
                className="w-[70%] outline-none h-12 p-2 my-2 rounded-md font-medium pl-3"
                value={todo}
                onChange={(e) => {
                  setTodo(e.target.value);
                }}
              />

              <button className="border border-b-2 outline-none bg-white h-12  mt-2 rounded-md font-semibold w-[20%]">
                {"Add"}
              </button>
            </form>
            <div className="mx-auto flex flex-wrap md:flex-col w-full">
              {todoList.map((todo, i) => (
                <div
                  key={i}
                  className="m-2 p-2  border-zinc-600 border-2 rounded-md w-full my-4 flex justify-between "
                >
                  <p className="font-medium w-[70%]">{todo.todoValue}</p>
                  <div>
                    <button
                      className="border border-black p-1 m-1"
                      onClick={() => {
                        handleEdit(i);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="border border-black p-1 m-1"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
