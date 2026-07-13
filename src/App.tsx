import { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import waffleThumbnail from "./assets/images/image-waffle-thumbnail.jpg";
import waffleMobile from "./assets/images/image-waffle-mobile.jpg";
import waffleTablet from "./assets/images/image-waffle-tablet.jpg";
import waffleDesktop from "./assets/images/image-waffle-desktop.jpg";

import tiramisuThumbnail from "./assets/images/image-tiramisu-thumbnail.jpg";
import tiramisuMobile from "./assets/images/image-tiramisu-mobile.jpg";
import tiramisuTablet from "./assets/images/image-tiramisu-tablet.jpg";
import tiramisuDesktop from "./assets/images/image-tiramisu-desktop.jpg";

import pannaCottaThumbnail from "./assets/images/image-panna-cotta-thumbnail.jpg";
import pannaCottaMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import pannaCottaTablet from "./assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaDesktop from "./assets/images/image-panna-cotta-desktop.jpg";

import meringueThumbnail from "./assets/images/image-meringue-thumbnail.jpg";
import meringueMobile from "./assets/images/image-meringue-mobile.jpg";
import meringueTablet from "./assets/images/image-meringue-tablet.jpg";
import meringueDesktop from "./assets/images/image-meringue-desktop.jpg";

import macaronThumbnail from "./assets/images/image-macaron-thumbnail.jpg";
import macaronMobile from "./assets/images/image-macaron-mobile.jpg";
import macaronTablet from "./assets/images/image-macaron-tablet.jpg";
import macaronDesktop from "./assets/images/image-macaron-desktop.jpg";

import cremeBruleeThumbnail from "./assets/images/image-creme-brulee-thumbnail.jpg";
import cremeBruleeMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeTablet from "./assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeDesktop from "./assets/images/image-creme-brulee-desktop.jpg";

import cakeThumbnail from "./assets/images/image-cake-thumbnail.jpg";
import cakeMobile from "./assets/images/image-cake-mobile.jpg";
import cakeTablet from "./assets/images/image-cake-tablet.jpg";
import cakeDesktop from "./assets/images/image-cake-desktop.jpg";

import brownieThumbnail from "./assets/images/image-brownie-thumbnail.jpg";
import brownieMobile from "./assets/images/image-brownie-mobile.jpg";
import brownieTablet from "./assets/images/image-brownie-tablet.jpg";
import brownieDesktop from "./assets/images/image-brownie-desktop.jpg";

import baklavaThumbnail from "./assets/images/image-baklava-thumbnail.jpg";
import baklavaMobile from "./assets/images/image-baklava-mobile.jpg";
import baklavaTablet from "./assets/images/image-baklava-tablet.jpg";
import baklavaDesktop from "./assets/images/image-baklava-desktop.jpg";

const products = [
  {
    id: 1,
    category: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: {
      thumbnail: waffleThumbnail,
      mobile: waffleMobile,
      tablet: waffleTablet,
      desktop: waffleDesktop,
    },
  },
  {
    id: 2,
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: {
      thumbnail: tiramisuThumbnail,
      mobile: tiramisuMobile,
      tablet: tiramisuTablet,
      desktop: tiramisuDesktop,
    },
  },
  {
    id: 3,
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: {
      thumbnail: pannaCottaThumbnail,
      mobile: pannaCottaMobile,
      tablet: pannaCottaTablet,
      desktop: pannaCottaDesktop,
    },
  },
  {
    id: 4,
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: {
      thumbnail: meringueThumbnail,
      mobile: meringueMobile,
      tablet: meringueTablet,
      desktop: meringueDesktop,
    },
  },
  {
    id: 5,
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: {
      thumbnail: macaronThumbnail,
      mobile: macaronMobile,
      tablet: macaronTablet,
      desktop: macaronDesktop,
    },
  },
  {
    id: 6,
    category: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: {
      thumbnail: cremeBruleeThumbnail,
      mobile: cremeBruleeMobile,
      tablet: cremeBruleeTablet,
      desktop: cremeBruleeDesktop,
    },
  },
  {
    id: 7,
    category: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: {
      thumbnail: cakeThumbnail,
      mobile: cakeMobile,
      tablet: cakeTablet,
      desktop: cakeDesktop,
    },
  },
  {
    id: 8,
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
    image: {
      thumbnail: brownieThumbnail,
      mobile: brownieMobile,
      tablet: brownieTablet,
      desktop: brownieDesktop,
    },
  },
  {
    id: 9,
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: {
      thumbnail: baklavaThumbnail,
      mobile: baklavaMobile,
      tablet: baklavaTablet,
      desktop: baklavaDesktop,
    },
  },
];

function App() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // return (
  //   <>
  //     <img src={Random1} alt="" />
  //     <img src={Random2} alt="" />
  //   </>
  // );

  return (
    <main className="container">
      {/* Products */}
      <section className="products">
        <h1>Desserts</h1>

        <div className="product-grid">
          {products.map((Product) => {
            const cartItem = cart.find((item) => item.id === Product.id);

            return (
              <Card
                key={Product.id}
                product={Product}
                cartItem={cartItem}
                addToCart={addToCart}
                increaseQty={increaseQty}
                decreaseQty={decreaseQty}
              />
            );
          })}
        </div>
      </section>

      {/* Cart */}
      <aside className="cart">
        <h2>Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src="src/assets/images/illustration-empty-cart.svg"
              alt="Empty Cart"
            />
            <p>Your added items will appear here.</p>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <div className="cart-left">
                  <h4>{item.name}</h4>

                  <div className="cart-details">
                    <span className="cart-qty">{item.quantity}x</span>

                    <span className="cart-unit">
                      @ ${item.price.toFixed(2)}
                    </span>

                    <span className="cart-price">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                  aria-label="Remove item"
                >
                  <img src="src/assets/images/icon-remove-item.svg" alt="" />
                </button>
              </div>
            ))}

            <div className="cart-total">
              <span>Order Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <div className="carbon-delivery">
              <img
                src="src/assets/images/icon-carbon-neutral.svg"
                alt="Carbon Neutral"
              />
              <p>
                This is a <strong>carbon-neutral</strong> delivery
              </p>
            </div>

            <button className="confirm-btn" onClick={() => setShowModal(true)}>
              Confirm Order
            </button>
          </>
        )}
      </aside>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <img
              src="src/assets/images/icon-order-confirmed.svg"
              alt="Confirmed"
              className="success-icon"
            />

            <h2>Order Confirmed</h2>
            <p>We hope you enjoy your food!</p>

            <div className="order-summary">
              {cart.map((item) => (
                <div className="summary-item" key={item.id}>
                  <div className="summary-left">
                    <img
                      src={item.image.thumbnail}
                      alt={item.name}
                      className="summary-img"
                    />

                    <div>
                      <h4>{item.name}</h4>

                      <div className="summary-info">
                        <span className="qty">{item.quantity}x</span>

                        <span className="price1">
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <strong>${(item.quantity * item.price).toFixed(2)}</strong>
                </div>
              ))}

              <div className="summary-total">
                <span>Order Total</span>
                <strong>${total.toFixed(2)}</strong>
              </div>
            </div>

            <button
              className="new-order-btn"
              onClick={() => {
                setCart([]);
                setShowModal(false);
              }}
            >
              Start New Order
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
