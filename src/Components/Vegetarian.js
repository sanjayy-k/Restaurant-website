import React, { useState } from 'react';
import './shoppingcart.css';
import shopping from '../image/shopping.jpg';
import im1 from '../image/im1.PNG'
import im2 from '../image/2.PNG'
import im3 from '../image/3.PNG'
import im4 from '../image/4.PNG'
import im5 from '../image/5.PNG'
import im6 from '../image/6.PNG'
import im7 from '../image/7.PNG'
import im8 from '../image/8.PNG'
import im9 from '../image/9.PNG'
const Vegetarian = () => {
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    // ...product data
    {
      id: 1,
      name: 'Full Meals',
      image: im1,
      price: 120
  },
  {
      id: 2,
      name: 'Parotta',
      image: im2,
      price: 20
  },
  {
      id: 3,
      name: 'Choola poori',
      image: im3,
      price: 35
  },
  {
      id: 4,
      name: 'Special Roast',
      image: im4,
      price: 50
  },
  {
      id: 5,
      name: 'sambhar rice',
      image: im5,
      price: 30
  },
  {
      id: 6,
      name: 'Variety Rice',
      image: im6,
      price: 40
  },
  {
    id: 7,
    name: 'Idiyappam',
    image: im7,
    price: 50
},
{
  id: 8,
  name: 'Appam',
  image: im8,
  price: 15
},
{
  id: 9,
  name: 'Hot Idli',
  image: im9,
  price: 25
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

export default Vegetarian;