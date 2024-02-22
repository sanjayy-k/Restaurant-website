import React, { useState } from 'react';
import './shoppingcart.css';
import shopping from '../image/shopping.jpg';
import im25 from '../image/25.PNG'
import im26 from '../image/26.PNG'
import im27 from '../image/27.PNG'
import im28 from '../image/28.PNG'
import im29 from '../image/29.PNG'
import im30 from '../image/30.PNG'
import im31 from '../image/31.PNG'
import im32 from '../image/32.PNG'
import im34 from '../image/34.PNG'
const Kfc = () => {
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    // ...product data
    {
      id: 1,
      name: 'Peri Peri 10 Pc chicken Strips',
      image: im25,
      price: 499.05
  },
  {
      id: 2,
      name: '5 Leg Pc & Dips Bucket',
      image: im26,
      price: 519.05
  },
  {
      id: 3,
      name: 'single chicken roll',
      image: im27,
      price: 119
  },
  {
      id: 4,
      name: 'The Allu Arjun combo',
      image: im28,
      price: 275
  },
  {
      id: 5,
      name: 'Family feast',
      image: im29,
      price: 859.05
  },
  {
      id: 6,
      name: 'choclate Lava',
      image: im30,
      price: 108.57
  },
  {
    id: 7,
    name: 'Bucket for two',
    image: im31,
    price: 599.05
},
{
  id: 8,
  name: 'Smoky grilled Biryani combo',
  image: im32,
  price: 740.00
},
{
  id: 9,
  name: 'popcorn Biryani box',
  image: im34,
  price: 328.57
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

export default Kfc;