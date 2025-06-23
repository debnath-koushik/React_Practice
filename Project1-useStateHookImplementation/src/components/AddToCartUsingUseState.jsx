import React, { useState } from 'react'

const allBrands = [
  { id: 1, name: 'Nike' },
  { id: 2, name: 'Adidas' },
  { id: 3, name: 'Puma' },
  { id: 4, name: 'Reebok' },
  { id: 5, name: 'Under Armour' }
];

export const AddToCartUsingUseState = () => {

  const [brands, setBrands] = useState(allBrands);
  const [cart, setCart] = useState([]);

  const onAddToCartClick = (id) => {
    if (cart.find((item) => item.id === id)) {
      alert('Item already in cart');
      return;
    } else {
      let item = brands.find((brand) => brand.id === id);
      //  setCart((prevCart) => [...prevCart, item]);
      setCart([...cart, item]);
    }

  }

  const onRemoveClick = (id) => {
    setCart(cart.filter((item) => item.id !== id));

  }

  return (
    <>
      <div>
        <h1>Add to Cart Using useState</h1>
        {
          brands.map((brand) => (
            <div key={brand.id}>
              <span>{brand.name}</span>
              <button onClick={() => onAddToCartClick(brand.id)}>Add to Cart</button>
            </div>
          ))
        }
        <h2>Cart Items</h2>
        {
          cart.map((item) => (
            <div key={item.id}>
              <span>{item.name}</span>
              <button onClick={() => onRemoveClick(item.id)}>Remove</button>
            </div>
          ))
        }
      </div>
    </>
  )
}
