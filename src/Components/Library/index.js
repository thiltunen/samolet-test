import "./index.scss";
import { memo } from "react";
import { Link } from "react-router-dom";

const Library = ({ id, name, libs }) => {
  return (
    <li className="list__item" key={id}>
      <h2 className="title">{name}</h2>
      <span>Количество библиотек: {libs}</span>
      <Link className="btn-about" to={`/about/${id}`}>
        Подробнее
      </Link>
    </li>
  );
};

export default memo(Library);
