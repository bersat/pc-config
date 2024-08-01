import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../Validation/pages/AuthContext";
import { getDatabase, ref, set, get, onValue } from "firebase/database";
import "./corzina.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const Corzina = ({ items }) => {
  const { isAuthenticated } = useAuth();
  const [userCart, setUserCart] = useState([]);
  const db = getDatabase();
  const [discountCode, setDiscountCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);

  const getTotalPrice = () => {
    if (!Array.isArray(userCart)) return 0;
    const total = userCart.reduce((total, item) => total + item.price, 0);
    if (discountApplied) {
      return Math.round(total * 0.8); // Apply 20% discount
    }
    return total;
  };

  const applyDiscount = () => {
    if (discountCode === "BASPC") {
      setDiscountApplied(true);
    } else {
      alert("Неверный код скидки.");
    }
  };

  const handleClearCart = async () => {
    setUserCart([]);
    if (isAuthenticated) {
      const userId = isAuthenticated.uid;
      const cartRef = ref(db, `carts/${userId}`);
      try {
        await set(cartRef, []);
      } catch (error) {
        console.error("Error clearing cart", error);
      }
    }
  };

  const handleRemoveFromCart = async (itemId) => {
    const updatedCart = userCart.filter((item) => item.id !== itemId);
    setUserCart(updatedCart);
    if (isAuthenticated) {
      const userId = isAuthenticated.uid;
      const cartRef = ref(db, `carts/${userId}`);
      try {
        await set(cartRef, updatedCart);
      } catch (error) {
        console.error("Error updating cart", error);
      }
    }
  };

  const handleSaveSelection = async () => {
    if (!isAuthenticated) {
      alert("Вы должны сначала авторизоваться");
      return;
    }

    const userId = isAuthenticated.uid;
    const cartRef = ref(db, `carts/${userId}`);

    try {
      const snapshot = await get(cartRef);
      let updatedCart = [];

      if (snapshot.exists()) {
        const existingCart = snapshot.val();

        // Удаляем из корзины товары, которые были ранее сохранены
        updatedCart = existingCart.filter(
          (item) => !items.some((i) => i.id === item.id)
        );
      }

      // Добавляем новые товары в корзину
      updatedCart = [...updatedCart, ...items];

      await set(cartRef, updatedCart);
      setUserCart(updatedCart); // Обновляем состояние корзины в приложении

      alert("Товары доавлены в корзину, вы можете их посмотреть");
    } catch (error) {
      console.error("Error saving data", error);
    }
  };

  const fetchSavedCart = async () => {
    if (!isAuthenticated) return;

    const userId = isAuthenticated.uid;
    const cartRef = ref(db, `carts/${userId}`);

    try {
      const snapshot = await get(cartRef);
      if (snapshot.exists()) {
        setUserCart(snapshot.val());
      } else {
        setUserCart([]);
      }
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  useMemo(() => {
    fetchSavedCart();
  }, [isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const userId = isAuthenticated.uid;
      const cartRef = ref(db, `carts/${userId}`);

      const unsubscribe = onValue(
        cartRef,
        (snapshot) => {
          try {
            if (snapshot.exists()) {
              setUserCart(snapshot.val());
            } else {
              setUserCart([]);
            }
          } catch (error) {
            console.error("Error fetching data", error);
          }
        },
        (error) => {
          console.error("Error subscribing to cart data", error);
        }
      );

      return () => unsubscribe();
    } else {
      setUserCart([]);
    }
  }, [isAuthenticated]);

  return (
    <div>
      <Header />
      <div
        style={{ marginTop: "52px", position: "absolute", marginLeft: "20px" }}
      >
        <button className="ochistkakorzini" onClick={handleClearCart}>
          Очистить корзину
        </button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h2>Корзина</h2>
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div>
          <button
            className="saveSelection ochistkakorzini"
            onClick={handleSaveSelection}
          >
            Посмотреть добавленные товары
          </button>
        </div>
      </div>
      <div>
        <div></div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
      {/* Existing JSX code */}
      <div className="container">
        <div>
          <input
            type="text"
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            placeholder="Введите код скидки"
          />
          <button onClick={applyDiscount}>Применить</button>
        </div>
      </div>
      {/* Existing JSX code */}

      <div
        style={{
          width: "270px",
          marginTop: "50px",
          position: "absolute",
          marginLeft: "20px",
        }}
      >
        <p className="obshsumm">
          {discountApplied ? (
            <>
              <del>Общая сумма без скидки: {getTotalPrice() / 0.8} ₽</del>
              <br />
              Общая сумма со скидкой 20%: {getTotalPrice()} ₽
            </>
          ) : (
            `Общая сумма выбранных товаров: ${getTotalPrice()} ₽`
          )}
        </p>
      </div>
      <div className="cart">
        {Array.isArray(userCart) &&
          userCart.map((item) => (
            <div className="divcart" key={item.id}>
              <h3
                style={{
                  width: "670px",
                  marginLeft: "320px",
                  position: "absolute",
                  fontSize: "20px",
                }}
              >
                {item.name}
              </h3>
              <img
                style={{ position: "absolute", marginTop: "6px" }}
                src={item.image}
                alt={item.name}
              />

              <div
                style={{
                  display: "flex",
                  float: "right",
                  marginTop: "70px",
                  fontFamily: '"Exo 2", sans-serif',
                }}
              >
                <div>
                  <p style={{ fontSize: "27px", fontWeight: "700" }}>
                    Цена: {item.price} ₽
                  </p>
                  <button
                    style={{
                      width: "170px",
                      height: "70px",
                      fontSize: "17px",
                      fontWeight: "700",
                    }}
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Удалить товар
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div style={{ marginTop: "-1525px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default Corzina;
