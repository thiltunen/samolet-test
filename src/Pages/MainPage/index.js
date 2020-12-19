import "./index.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLibsThunk } from "../../redux/actions/lib";
import LibrariesList from "../../Components/LibrariesList";

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLibsThunk());
  }, [dispatch]);

  return (
    <main className="main">
      <LibrariesList />
    </main>
  );
};

export default MainPage;
