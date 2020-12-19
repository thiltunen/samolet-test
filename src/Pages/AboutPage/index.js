import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

const AboutPage = () => {
  const { id } = useParams();
  const libs = useSelector((state) => state.libs);
  const region = libs.find((el) => el.order === +id);

  return (
    <div className="about-page">
      <div className="about-page__card">
        <ul className="about-page__list">
          <li className="about-page__list-item">{region.fullname}</li>
          <li className="about-page__list-item">
            Количество библиотек: {region.libraries}
          </li>
          <li className="about-page__list-item">
            Количество компьютеров в библиотеках: {region.libraries_computers}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
