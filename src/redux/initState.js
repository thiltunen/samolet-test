const initState = () => {
  const IS = {
    filterText: "",
    libs: [],
  };

  return JSON.parse(window.localStorage.getItem("redux")) || IS;
};

export default initState;
