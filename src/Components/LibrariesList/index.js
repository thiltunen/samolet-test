import "./index.scss";
import { useSelector } from "react-redux";
import Library from "../Library";

const LibrariesList = () => {
  const filterText = useSelector((state) => state.filterText).toLowerCase();
  const libs = useSelector((state) => state.libs);

  return (
    <ul className="list">
      {libs
        .filter((el) => el.fullname.toLowerCase().match(filterText))
        .map((el) => (
          <Library
            key={el.order}
            id={el.order}
            name={el.fullname}
            libs={el.libraries}
          />
        ))}
    </ul>
  );
};

export default LibrariesList;
