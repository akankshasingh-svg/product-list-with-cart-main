import plusIcon from "../assets/images/icon-increment-quantity.svg";
import minusIcon from "../assets/images/icon-decrement-quantity.svg";

type CardProps = {
  product: any;
  cartItem: any;
  addToCart: (product: any) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
};

function Card({
  product,
  cartItem,
  addToCart,
  increaseQty,
  decreaseQty,
}: CardProps) {
  return (
    <article className="card">
      <div className="image-wrapper">
        <picture>
          <source media="(min-width:650px)" srcSet={product.image.desktop} />
          <source media="(min-width:465px)" srcSet={product.image.tablet} />
          <img
            src={product.image.mobile}
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
          <button className="add-cart-btn" onClick={() => addToCart(product)}>
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
}

export default Card;
