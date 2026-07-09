import { useState } from "react";
import "./App.css";
import minusIcon from "./assets/images/icon-decrement-quantity.svg";
import plusIcon from "./assets/images/icon-increment-quantity.svg";
import carbonIcon from "./assets/images/icon-carbon-neutral.svg";

const products = [
  {
    id: 1,
    category: "Waffle",
    name: "Waffle with Berries",
    price: 6.5,
    image: {
      thumbnail: "src/assets/images/image-waffle-thumbnail.jpg",
      mobile: "src/assets/images/image-waffle-mobile.jpg",
      tablet: "src/assets/images/image-waffle-tablet.jpg",
      desktop: "src/assets/images/image-waffle-desktop.jpg",
    },
  },
  {
    id: 2,
    category: "Tiramisu",
    name: "Classic Tiramisu",
    price: 5.5,
    image: {
      thumbnail: "src/assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "src/assets/images/image-tiramisu-mobile.jpg",
      tablet: "src/assets/images/image-tiramisu-tablet.jpg",
      desktop: "src/assets/images/image-tiramisu-desktop.jpg",
    },
  },
  {
    id: 3,
    category: "Panna Cotta",
    name: "Vanilla Panna Cotta",
    price: 6.5,
    image: {
      thumbnail: "src/assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "src/assets/images/image-panna-cotta-mobile.jpg",
      tablet: "src/assets/images/image-panna-cotta-tablet.jpg",
      desktop: "src/assets/images/image-panna-cotta-desktop.jpg",
    },
  },
  {
    id: 4,
    category: "Pie",
    name: "Lemon Meringue Pie",
    price: 5.0,
    image: {
      thumbnail: "src/assets/images/image-meringue-thumbnail.jpg",
      mobile: "src/assets/images/image-meringue-mobile.jpg",
      tablet: "src/assets/images/image-meringue-tablet.jpg",
      desktop: "src/assets/images/image-meringue-desktop.jpg",
    },
  },
  {
    id: 5,
    category: "Macaron",
    name: "Macaron Mix of Five",
    price: 8.0,
    image: {
      thumbnail: "src/assets/images/image-macaron-thumbnail.jpg",
      mobile: "src/assets/images/image-macaron-mobile.jpg",
      tablet: "src/assets/images/image-macaron-tablet.jpg",
      desktop: "src/assets/images/image-macaron-desktop.jpg",
    },
  },
  {
    id: 6,
    category: "Crème Brûlée",
    name: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    image: {
      thumbnail: "src/assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "src/assets/images/image-creme-brulee-mobile.jpg",
      tablet: "src/assets/images/image-creme-brulee-tablet.jpg",
      desktop: "src/assets/images/image-creme-brulee-desktop.jpg",
    },
  },
  {
    id: 7,
    category: "Cake",
    name: "Red Velvet Cake",
    price: 4.5,
    image: {
      thumbnail: "src/assets/images/image-cake-thumbnail.jpg",
      mobile: "src/assets/images/image-cake-mobile.jpg",
      tablet: "src/assets/images/image-cake-tablet.jpg",
      desktop: "src/assets/images/image-cake-desktop.jpg",
    },
  },
  {
    id: 8,
    category: "Brownie",
    name: "Salted Caramel Brownie",
    price: 5.5,
    image: {
      thumbnail: "src/assets/images/image-brownie-thumbnail.jpg",
      mobile: "src/assets/images/image-brownie-mobile.jpg",
      tablet: "src/assets/images/image-brownie-tablet.jpg",
      desktop: "src/assets/images/image-brownie-desktop.jpg",
    },
  },
  {
    id: 9,
    category: "Baklava",
    name: "Pistachio Baklava",
    price: 4.0,
    image: {
      thumbnail: "src/assets/images/image-baklava-thumbnail.jpg",
      mobile: "src/assets/images/image-baklava-mobile.jpg",
      tablet: "src/assets/images/image-baklava-tablet.jpg",
      desktop: "src/assets/images/image-baklava-desktop.jpg",
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

  return (
    <main className="container">
      {/* Products */}
      <section className="products">
        <h1>Desserts</h1>

        <div className="product-grid">
          {products.map((product) => {
            const cartItem = cart.find((item) => item.id === product.id);

            return (
              <article className="card" key={product.id}>
                <div className="image-wrapper">
                  <picture>
                    {/* Mobile */}
                    <source
                      media="(max-width: 767px)"
                      srcSet={product.image.mobile}
                    />

                    {/* Tablet */}
                    <source
                      media="(max-width: 1023px)"
                      srcSet={product.image.tablet}
                    />

                    {/* Desktop (default) */}
                    <img
                      src={product.image.desktop}
                      alt={product.name}
                      className="product-image"
                    />
                  </picture>

                  {cartItem ? (
                    <div className="quantity-btn">
                      <button
                        className="icon-btn"
                        onClick={() => decreaseQty(product.id)}
                      >
                        <img src={minusIcon} alt="Decrease quantity" />
                      </button>

                      <span>{cartItem.quantity}</span>

                      <button
                        className="icon-btn"
                        onClick={() => increaseQty(product.id)}
                      >
                        <img src={plusIcon} alt="Increase quantity" />
                      </button>
                    </div>
                  ) : (
                    <button
                      className="add-cart-btn"
                      onClick={() => addToCart(product)}
                    >
                      <img
                        className="cart-icon"
                        src="src/assets/images/icon-add-to-cart.svg"
                        alt="Cart"
                      />
                      <span>Add to Cart</span>
                    </button>
                  )}
                </div>

                <div className="product-info">
                  <p className="category">{product.category}</p>
                  <h2 className="name">{product.name}</h2>
                  <p className="price">${product.price.toFixed(2)}</p>
                </div>
              </article>
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
