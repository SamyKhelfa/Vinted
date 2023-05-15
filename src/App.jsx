import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // assurez-vous d'importer votre fichier CSS

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(result.data.offers);
    };
    fetchData();
  }, []);

  return (
    <div>
      <header className="header">
        <img
          src="./src/assets/img/vinted.png"
          alt="logo"
          style={{ width: "150px", height: "80px" }}
        />
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Recherche des articles"
        />
        <button>S'inscrire</button>
        <button>Se connecter</button>
        <button>Vends tes articles</button>
      </header>
      {data.map((item) => (
        <div key={item._id}>
          <h2>{item.product_name}</h2>
          <p>{item.product_description}</p>
          <p>{item.product_price} €</p>
          <img src={item.product_image.url} alt={item.product_name} />
        </div>
      ))}
    </div>
  );
}

export default App;
