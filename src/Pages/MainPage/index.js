import "./index.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLibsThunk } from "../../redux/actions/lib";
import LibrariesList from "../../Components/LibrariesList";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibsThunk());
  }, []);

  return (
    <main className="main">
      <LibrariesList />
    </main>
  );
};

export default MainPage;
