import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../img/img-header/logo_2.png";
import "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../Validation/pages/AuthContext";

const Header = () => {
  const [texts, setTexts] = useState([
    "Рады вас видеть в нашем конфигураторе ПК!",
    "Вы хотите собрать ПК, но не знаете как?",
    "Мы поможем вам подобрать комплектующие под ваши нужды",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const [isFixed, setIsFixed] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Установка состояния фиксации в зависимости от направления скролла и положения на странице
      setIsFixed(currentScrollPos > 200 && currentScrollPos > prevScrollPos);

      setPrevScrollPos(currentScrollPos);
    };

    // Добавление обработчика события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Удаление обработчика события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [texts.length]);

  return (
    <div className={`bgheader ${isFixed ? "fixed" : ""}`}>
      <div style={{ display: "flex" }}>
        <img className="logo" src={logo} alt="logo"></img>
        <section style={{ paddingRight: "220px" }} className="header">
          <div className="title-wrapper">
            <h1 className="sweet-title">
              <span data-text="BAS">BAS</span>
              <span data-text="PC">PC</span>
            </h1>
          </div>
        </section>
        <section className="disclaimer">
          <div className="header">
            <h1>{texts[currentIndex]}</h1>
          </div>
        </section>

        <div
          style={{
            display: "flex",
            width: "420px",
            paddingLeft: "71px",
          }}
        >
          <Link className="StranicaGlav" to="/Glav">
            Главная
          </Link>
          <Link className="StranicaKonfig" to="/">
            Конфигуратор
          </Link>
          <Link className="aboutusssilka" to="/AboutUs">
            О нас
          </Link>
          <Link
            style={{
              position: "absolute",
              marginLeft: "175px",
              marginTop: "35px",
              fontSize: "23px",
            }}
            className="ssilkacorzina"
            to="/Corzina"
          >
            <i className="fa-solid fa-cart-shopping iconcorzina"></i>
          </Link>
          <Link
            style={{
              marginLeft: "240px",
              marginTop: "43px",
              display: "flex",
              textDecoration: "none",
              position: "absolute",
            }}
            className="btnheader"
            to={isAuthenticated ? "/Raslogin" : "/Login"}
            onClick={isAuthenticated ? logout : null}
          >
            {isAuthenticated ? (
              <i className="fas fa-check-circle user"></i>
            ) : (
              <i className="fa-regular fa-user user"></i>
            )}
            {isAuthenticated ? "Вы вошли" : "Войти"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
