import "./index.scss";
import { useSelector } from "react-redux";
import Library from "../Library";

const LibrariesList = () => {
  const libs = useSelector((state) => state.libs);
  return (
    <ul className="list">
      {libs.map((el) => (
        <Library key={el.order} id={el.order} />
      ))}
    </ul>
  );
};

export default LibrariesList;
