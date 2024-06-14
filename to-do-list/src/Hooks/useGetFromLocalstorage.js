const useGetFromLocalstorage = () => {
  const data = localStorage.getItem("Todos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

export default useGetFromLocalstorage;
