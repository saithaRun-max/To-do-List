const useSendToLS = (todoList) => {
  localStorage.setItem("Todos", JSON.stringify(todoList));
};

export default useSendToLS;
