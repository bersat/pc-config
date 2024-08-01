import React, { useEffect, useState } from "react";
import "./style-alert.css";

const Alert = ({ message, visible }) => {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    let timer1;
    let timer2;

    if (visible) {
      setShow(true);
      timer1 = setTimeout(() => {
        setShow(false);
      }, 5000);
    }

    timer2 = setTimeout(() => {
      setShow(false);
    }, 5500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [visible]);

  return <div className={`alert ${show ? "show" : "hide"}`}>{message}</div>;
};

export default Alert;
