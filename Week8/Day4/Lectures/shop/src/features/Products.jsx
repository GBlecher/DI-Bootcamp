import { useState, useEffect } from "react";
import { Link } from "react-router";
import './Products.css'

const Products = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    all();
  }, []);

  const all = async () => {
    try {
      const res = await fetch("http://localhost:3001/products/");
      const data = await res.json();
      setProducts(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <h2>Shop</h2>
      {products.map((item) => {
        return (
          <div key={item.id} className="card">
            <h2>{item.name}</h2>
            <h2>{item.price}</h2>
            <Link to={`/product/${item.id}`}>Buy Now</Link>
          </div>
        );
      })}
    </>
  );
};
export default Products;
