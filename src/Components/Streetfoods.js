import React, { useState } from 'react';
import './shoppingcart.css';
import shopping from '../image/shopping.jpg';
import im19 from '../image/19.PNG'
import im20 from '../image/20.PNG'
import im21 from '../image/21.PNG'
import im22 from '../image/22.PNG'
import im23 from '../image/23.PNG'
import im24 from '../image/24.PNG'
const Streetfoods = () => {
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    // ...product data
    {
      id: 1,
      name: 'Chicken lollipop',
      image: im19,
      price: 220
  },
  {
      id: 2,
      name: 'Shawarma',
      image: im20,
      price: 140
  },
  {
      id: 3,
      name: 'Schezwan Noodles',
      image: im21,
      price: 70
  },
  {
      id: 4,
      name: 'Chicken fried rice',
      image: im22,
      price: 80
  },
  {
      id: 5,
      name: 'Pav bhajji',
      image: im23,
      price: 120
  },
  {
      id: 6,
      name: 'Aloo tehri',
      image: im24,
      price: 110
  },
  ];

  const openShoppingCart = () => {
    setShoppingCartOpen(true);
    document.body.classList.add('active');
  };

  const closeShoppingCart = () => {
    setShoppingCartOpen(false);
    document.body.classList.remove('active');
  };

  const addToCart = (key) => {
    const newItem = { ...products[key], quantity: 1 };
    setCartItems([...cartItems, newItem]);
  };

  const changeQuantity = (index, newQuantity) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter((item, i) => i !== index));
    } else {
      setCartItems(
        cartItems.map((item, i) =>
          i === index ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="container">
      <header>
        <h1 className="sh">Your Shopping Cart</h1>
        <div className="shopping" onClick={openShoppingCart}>
          <img src={shopping} alt="Shopping Cart" />
          <span className="quantity">{cartItems.length}</span>
        </div>
      </header>

      <div className="list">
        {products.map((product, key) => (
          <div className="item" key={key}>
            <img src={`${product.image}`} alt={product.name} />
            <div className="title">{product.name}</div>
            <div className="price">&#8377; {product.price.toLocaleString()}</div>
            <button onClick={() => addToCart(key)} className="Ad">Add To Cart</button>
          </div>
        ))}
      </div>

      {isShoppingCartOpen && (
        <div className="card">
          <h1>Card</h1>
          <ul className="listCard">
            {cartItems.map((item, index) => (
              <li key={index}>
                <div>
                  <img src={`${item.image}`} alt={item.name} />
                </div>
                <div>{item.name}</div>
                <div>{item.price.toLocaleString()}</div>
                <div>
                  <button onClick={() => changeQuantity(index, item.quantity - 1)}>
                    -
                  </button>
                  <div className="count">{item.quantity}</div>
                  <button onClick={() => changeQuantity(index, item.quantity + 1)}>
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="checkOut">
            <a href="/Payment">
              <div className="total">&#8377; {totalPrice.toLocaleString()}</div>
            </a>
            <div className="closeShopping" onClick={closeShoppingCart}>
              Close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Streetfoods;