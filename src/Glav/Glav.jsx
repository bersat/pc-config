import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import banner2 from "./img/banner2.jpg";
import pc from "./img/pc.png";
import "./style-glav.css";
import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { Link } from "react-router-dom";
import pc80 from "./img/80k.jfif";

const Glav = () => {
  const [time, setTime] = useState(10 * 60 * 60); // 10 часов в секундах
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    if (time > 0) {
      const timerId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else {
      setIsOver(true);
    }
  }, [time]);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="osnovnoydiv">
      <Header />
      <div className="image">
        <img
          alt="баннер с таймером"
          style={{ backgroundColor: "black", width: "90%", height: "600px" }}
          src={banner2}
        />

        <div className="image-filter"></div>
        <div
          style={{
            width: "700px",
            height: "350px",
            position: "absolute",
            display: "flex",
            marginLeft: "-800px",
            marginTop: "120px",
            justifyContent: "center",
          }}
        >
          <img src={pc} alt="картинка компьютера" />
        </div>
        <div className="fontwhite-banner-timer">
          <div style={{ textAlign: "center", padding: "20px" }}>
            {isOver ? (
              <div>
                <h1
                  className="akcia"
                  style={{
                    marginLeft: "120px",
                    fontSize: "45px",
                    marginTop: "100px",
                  }}
                >
                  Акция закончилась!
                </h1>

                <Confetti style={{ width: "700px", height: "300px" }} />
              </div>
            ) : (
              <div>
                <div style={{ display: "flex" }}>
                  <h1 style={{ fontSize: "40px", color: "#2e0357" }}>
                    ПРОМОКОД
                  </h1>
                  <h1
                    style={{
                      fontSize: "40px",
                      paddingLeft: "76px",
                      color: "#2e0357",
                    }}
                  >
                    Н
                  </h1>
                  <h1
                    style={{
                      fontSize: "40px",
                      paddingLeft: "3px",
                      color: "white",
                    }}
                  >
                    А
                  </h1>
                  <h1
                    style={{
                      fontSize: "40px",
                      paddingLeft: "54px",
                      color: "white",
                    }}
                  >
                    СКИДКУ 20%
                  </h1>
                </div>
                <h1
                  style={{
                    marginLeft: "-31px",
                    fontSize: "90px",
                    marginTop: "60px",
                  }}
                >
                  <div className="promo">{formatTime(time)}</div>
                </h1>
                <div
                  style={{
                    display: "flex",
                    width: "700px",
                    justifyContent: "center",
                    marginTop: "65px",
                  }}
                >
                  <button className="aktibutton">
                    <Link className="linktocorzina-aktibutton" to="/Corzina">
                      Активировать
                    </Link>
                  </button>
                  <h1
                    style={{
                      fontSize: "20px",
                      marginLeft: "220px",
                      color: "white",
                    }}
                  >
                    Промокод: BASPC
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="osnovnoyContentGlav">
        <p style={{ fontSize: "32px", width: "100%", textAlign: "center" }}>
          "Конфигуратор ПК" — это уникальный онлайн-сервис, предназначенный для
          <br></br>
          создания индивидуальных конфигураций персональных компьютеров.
          <br /> Он предлагает пользователям удобный и интуитивно понятный
          интерфейс,
          <br /> обеспечивая возможность выбора всех необходимых компонентов и
          гарантируя их совместимость.
          <br /> Наш сервис идеально подходит как для опытных пользователей,
          <br /> так и для новичков, желающих собрать свой первый ПК.
        </p>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: "100px",
          }}
        >
          <iframe
            width="1060"
            height="615"
            src="https://www.youtube.com/embed/TEBVuZVz5cE?si=-0wY5sWDuke2sD_4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div
          style={{
            width: "89.9%",
            borderBottom: "2px solid grey",
            position: "absolute",
            marginTop: "150px",
            marginLeft: "95px",
          }}
        ></div>

        <h1
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
            marginTop: "170px",
          }}
        >
          Почему стоит выбирать конфигуратор пк?
        </h1>

        <div
          style={{
            width: "89.9%",
            borderBottom: "2px solid grey",
            position: "absolute",
            marginTop: "20px",
            marginLeft: "95px",
          }}
        ></div>

        <div className="textGlav">
          <div style={{ marginTop: "100px" }} className="list glowing-border">
            <h2 style={{ fontSize: "28px" }}>Выбор компонентов</h2>
            <p>
              "Конфигуратор ПК" предоставляет доступ к широкому ассортименту
              компонентов, среди которых:
            </p>
            <ul style={{ marginLeft: "40px", marginTop: "20px" }}>
              <li>
                <span>
                  <strong>Процессор (CPU):</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Выбор различных моделей от Intel и AMD, с учетом
                    производительности и бюджета.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong> Видеокарта (GPU):</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Ассортимент видеокарт от NVIDIA и AMD, подходящих для любых
                    задач — от игр до профессиональной работы.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong> Оперативная память (RAM):</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Разнообразие по объему, типу и частоте, обеспечивая
                    возможность подобрать оптимальный вариант для конкретных
                    нужд.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong> Жесткие диски и SSD:</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Варианты различной емкости и скорости, позволяющие выбрать
                    между HDD и SSD в зависимости от потребностей в хранении
                    данных и скорости доступа.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong>Материнская плата:</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Поддержка различных сокетов и форм-факторов, с учетом всех
                    необходимых функций и возможностей для расширения.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong> Блок питания (PSU):</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Выбор по мощности и бренду, чтобы обеспечить стабильную
                    работу системы.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong>Корпус:</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Различные размеры, дизайны и функциональность, учитывающие
                    требования к охлаждению и эстетике.
                  </p>
                </span>
              </li>
              <li>
                <span>
                  <strong>Охлаждение:</strong>
                  <p style={{ marginLeft: "20px" }}>
                    Системы воздушного и жидкостного охлаждения для обеспечения
                    оптимальной температуры компонентов.
                  </p>
                </span>
              </li>
            </ul>
          </div>

          <img
            style={{
              display: "flex",
              float: "right",
              marginTop: "-600px",
              width: "700px",
              boxShadow: "0px 0px 20px 5px black",
              borderRadius: "10px",
            }}
            src={pc80}
            alt="комп за 80к рублей"
          />

          <div
            style={{ marginLeft: "900px", marginTop: "50px", width: "810px" }}
            className="list glowing-border"
          >
            <h2
              style={{
                fontSize: "28px",
              }}
            >
              Совместимость компонентов
            </h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Автоматическая проверка совместимости выбранных компонентов
                  исключает ошибки при сборке.
                </span>
              </li>
              <li>
                <span>
                  Подсказки и рекомендации помогают оптимизировать выбор и
                  избежать несовместимостей.
                </span>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "50px" }} className="list glowing-border">
            <h2 style={{ fontSize: "28px" }}>Расчет стоимости</h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Мгновенный расчет общей стоимости конфигурации, позволяющий
                  контролировать бюджет.
                </span>
              </li>
              <li>
                <span>
                  Возможность выбора компонентов в рамках заданного бюджета, что
                  помогает сбалансировать производительность и затраты.
                </span>
              </li>
            </ul>
          </div>

          <div
            style={{
              width: "89.9%",
              borderBottom: "2px solid grey",
              position: "absolute",
              marginTop: "150px",
            }}
          ></div>

          <h1
            style={{
              width: "100%",
              textAlign: "center",
              fontSize: "32px",
              marginTop: "170px",
            }}
          >
            Преимущества использования нашего конфигуратора
          </h1>

          <div
            style={{
              width: "89.9%",
              borderBottom: "2px solid grey",
              position: "absolute",
              marginTop: "20px",
            }}
          ></div>

          <div style={{ marginTop: "80px" }} className="list glowing-border">
            <h2 style={{ fontSize: "28px" }}>Удобство использования</h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Интуитивно понятный интерфейс, который позволяет быстро и
                  легко создавать конфигурации.
                </span>
              </li>
              <li>
                <span>
                  Пошаговое руководство по сборке ПК, начиная от выбора
                  процессора и заканчивая выбором блока питаня.
                </span>
              </li>
            </ul>
          </div>

          <div
            style={{ marginTop: "50px", marginLeft: "900px", width: "810px" }}
            className="list glowing-border"
          >
            <h2
              style={{
                fontSize: "28px",
              }}
            >
              Широкий выбор компонентов
            </h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Огромный ассортимент компонентов от проверенных
                  производителей.
                </span>
              </li>
              <li>
                <span>
                  Регулярное обновление каталога с новинками и топовыми
                  моделями.
                </span>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: "50px" }} className="list glowing-border">
            <h2 style={{ fontSize: "28px" }}>Гарантия совместимости</h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Автоматическая проверка совместимости компонентов исключает
                  ошибки и несовместимости.
                </span>
              </li>
              <li>
                <span>
                  Подробные рекомендации и подсказки по совместимым компонентам.
                </span>
              </li>
            </ul>
          </div>

          <div
            style={{ marginTop: "50px", marginLeft: "900px", width: "810px" }}
            className="list glowing-border"
          >
            <h2
              style={{
                fontSize: "28px",
              }}
            >
              Экономия времени и средств
            </h2>
            <ul style={{ marginLeft: "20px" }}>
              <li>
                <span>
                  Быстрый расчет стоимости конфигурации и подбор компонентов в
                  рамках бюджета.
                </span>
              </li>
              <li>
                <span>
                  Специальные предложения и скидки на популярные компоненты.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "130px",
        }}
      >
        <button class="btn-hover color-7">
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to="/"
            onClick={() => window.scrollTo(0, 0)}
          >
            Перейти к сборке
          </Link>
        </button>
      </div>
      <div style={{ marginTop: "-2100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Glav;
