import React from "react";
import "./styles.css";
import { ShoppingCart } from "lucide-react";

const products = [
  { id: 1, name: "Patek Philippe Grandmaster Chime", price: "31000$", image: "https://tse4.mm.bing.net/th?id=OIP.DXD9INcBGLkJm7Bo2ytiVAHaJ3&w=200&h=266&c=7" },
  { id: 2, name: "Rolex Daytona", price: "20000$", image: "https://tse1.mm.bing.net/th?id=OIP.miYlXiQXkOeVg_JByhMIpwHaJG&w=200&h=246&c=7" },
  { id: 3, name: "Audemars Piguet Royal Oak", price: "25000$", image: "https://tse3.mm.bing.net/th?id=OIP.EMkB4LUkLpVZYlLe51JrkAHaJ4&w=200&h=267&c=7" },
  { id: 4, name: "Tag Heuer Monaco", price: "7500$", image: "https://tse3.mm.bing.net/th?id=OIP.PrFDQuc-z3Mv0dgeJDszHAHaHa&w=200&h=200&c=7" },
  { id: 5, name: "Omega Speedmaster", price: "6500$", image: "https://tse2.mm.bing.net/th?id=OIP.InnBYC9_aQ3D0r_u9qJESwHaE0&w=200&h=130&c=7" },
  { id: 6, name: "Cartier Santos", price: "9000$", image: "https://tse2.mm.bing.net/th?id=OIP._7uXdFoGjLvKG5S2Y-UMtwHaFb&w=200&h=146&c=7" },
  { id: 7, name: "Hublot Big Bang", price: "15000$", image: "https://tse3.mm.bing.net/th?id=OIP.gb1w1m0aMKMY77-QUY8i9QHaKm&w=200&h=286&c=7" },
  { id: 8, name: "Breitling Navitimer", price: "11000$", image: "https://tse1.mm.bing.net/th?id=OIP.6XCO_Ewpi_GeewlqUPViQgHaHa&w=200&h=200&c=7" },
];


function Footer() {
  return <footer className="footer">© 2025 Mukhammeds watch online-shop.</footer>;
}

export default function HomePage() {
  return (
    <>
      <div className="container">
        <h1 className="title">Watch shop</h1>
        <div className="grid-container">
          {products.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} className="card-image" />
              <h2 className="card-title">{product.name}</h2>
              <p className="card-price">{product.price}</p>
              <button className="button">
                <ShoppingCart size={16} /> В корзину
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
