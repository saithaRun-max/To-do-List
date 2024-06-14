const useHandleEdit = (todoList, i) => {
  const edited = [...todoList];
  const editValue = prompt("Edit Task");
  if (editValue == "") {
    alert("Field can not be blank");
  } else {
    edited[i].todoValue = editValue;
  }

  return edited;
};

export default useHandleEdit;
