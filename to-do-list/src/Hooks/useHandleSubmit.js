const useHandleSubmit = (todoList, todo) => {
  const date = new Date();
  const time = date.getTime();
  const newTodo = [
    ...todoList,
    { id: time, todoValue: todo, completed: false },
  ];
  return newTodo;
};

export default useHandleSubmit;
