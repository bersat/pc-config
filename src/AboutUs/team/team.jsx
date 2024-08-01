import React from "react";
import "./team.css"; // Import the CSS file for styling
import stepan from "./img/stepan.jpg"; // Replace with actual path to image
import jecka from "./img/jecka.jpg"; // Replace with actual path to image
import aleksandr from "./img/aleksandr.jpg"; // Replace with actual path to image

const Team = () => {
  return (
    <div style={{ marginLeft: "-110px" }} class="containerr">
      <div class="box">
        <div class="content">
          <div class="tape"></div>
          <div
            style={{
              width: "280px",
              height: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ paddingTop: "-300px" }}
              src={stepan}
              alt="stepan"
              className="photo"
            />
          </div>

          <h3>Степан Басенков</h3>
          <h4>Главный директор и разработчик</h4>
          <p>
            Степан увлекается компьютерами с детства и имеет более 20 лет опыта
            в ИТ-индустрии. Он начал свою карьеру как системный администратор и
            постепенно вырос до руководящей должности, основав "Конфигуратор ПК"
            в 2010 году. Иван отвечает за стратегическое развитие компании и
            партнерские отношения с ведущими производителями комплектующих.
          </p>
        </div>
      </div>

      <div class="box">
        <div class="content">
          <div class="tape"></div>
          <div
            style={{
              width: "280px",
              height: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ paddingTop: "-300px" }}
              src={jecka}
              alt="jecka"
              className="photo"
            />
          </div>
          <h3>Евгений Федорычев</h3>
          <h4>Дизайнер</h4>
          <p>
            Евгений — ведущий дизайнер сайта "BAS PC". С высшим образованием в
            области графического дизайна и более 15 лет опыта, Евгений
            присоединился к компании в 2015 году. Он руководил несколькими
            редизайнами сайта, улучшил пользовательский опыт и внедрил
            инновационные технологии. Вне работы Евгений увлекается фотографией
            и цифровым искусством, а также активно участвует в дизайнерских
            конференциях.
          </p>
        </div>
      </div>

      <div class="box">
        <div class="content">
          <div class="tape"></div>
          <div
            style={{
              width: "280px",
              height: "320px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{ paddingTop: "-300px" }}
              src={aleksandr}
              alt="aleksandr"
              className="photo"
            />
          </div>
          <h3>Александр Крестоносец</h3>
          <p>
            Александр — ведущий сборщик компьютеров в компании "Конфигуратор
            ПК". С 2013 года он собирает персональные компьютеры, игровые
            компьютеры и высокопроизводительные системы для профессионалов.
            Алексей известен своим вниманием к деталям, качеством сборки и
            индивидуальным подходом к каждому заказу.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
