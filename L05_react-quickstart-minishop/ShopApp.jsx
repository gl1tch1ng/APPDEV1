import { useState } from 'react';

const products = [
  { id: 1, title: 'Cabbage', price: 1.5, isFruit: false, popular: false },
  { id: 2, title: 'Garlic', price: 2.0, isFruit: false, popular: true },
  { id: 3, title: 'Apple', price: 3.25, isFruit: true, popular: true },
  { id: 4, title: 'Mango', price: 4.0, isFruit: true, popular: false },
];

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>

      <p>Price: ${product.price.toFixed(2)}</p>

      {product.popular && <span>⭐ Popular</span>}

      <br />
      <button onClick={onAddToCart}>Add to Cart</button>
    </div>
  );
}

export default function ShopApp() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(prevCount => prevCount + 1);
  }

  return (
    <div className="shop">
      <h1>Mini Fruit & Veg Stand</h1>

      <p>Cart: <strong>{cartCount}</strong> item(s)</p>

      <div className="product-list">
        {products.map(product => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}