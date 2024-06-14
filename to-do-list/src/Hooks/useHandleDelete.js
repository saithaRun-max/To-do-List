const useHandleDelete = (todoList, id) => {
  const data = todoList.filter((todo) => todo.id !== id);
  return data;
};

export default useHandleDelete;
