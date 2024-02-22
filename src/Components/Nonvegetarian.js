import React, { useState } from 'react';
import './shoppingcart.css';
import shopping from '../image/shopping.jpg';
import im10 from '../image/10.PNG'
import im11 from '../image/11.PNG'
import im12 from '../image/12.PNG'
import im13 from '../image/13.PNG'
import im14 from '../image/14.PNG'
import im15 from '../image/15.PNG'
import im16 from '../image/16.PNG'
import im17 from '../image/17.PNG'
import im18 from '../image/18.PNG'
const Nonvegetarian = () => {
  const [isShoppingCartOpen, setShoppingCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const products = [
    // ...product data
    {
      id: 1,
      name: 'Chicken Biryani',
      image: im10,
      price: 180
  },
  {
      id: 2,
      name: 'Egg Biryani',
      image: im11,
      price: 120
  },
  {
      id: 3,
      name: 'Mutton Biryani',
      image: im12,
      price: 325
  },
  {
      id: 4,
      name: 'Pepper Beef Gravy',
      image: im13,
      price: 275
  },
  {
      id: 5,
      name: 'Butter chicken Gravy Boneless',
      image: im14,
      price: 210
  },
  {
      id: 6,
      name: 'chettinadu chicken gravy',
      image: im15,
      price: 190
  },
  {
    id: 7,
    name: 'Butter Naan',
    image: im16,
    price: 50
},
{
  id: 8,
  name: 'Panner Butter Masala',
  image: im17,
  price: 220
},
{
  id: 9,
  name: 'Gobi manchurian',
  image: im18,
  price: 65
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

export default Nonvegetarian