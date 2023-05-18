import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
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
          className="search"
          type="search"
          id="query"
          name="q"
          placeholder="Recherche des articles"
        />
        <button className="header-button signup">S'inscrire</button>
        <button className="header-button login">Se connecter</button>
        <button className="header-button sold">Vends tes articles</button>
      </header>
      <div className="img-container">
        <img
          className="home"
          src="./src/assets/img/home.jpg"
          alt="home"
          style={{ width: "1900px", height: "450px" }}
        />
        <div className="overlay">
          <h1>Prêts à faire du tri dans vos placards ?</h1>
          <button>Commencer à vendre</button>
        </div>
      </div>
      <div className="offer-container">
        {data.map((item) => (
          <div className="offers" key={item._id}>
            <h2>{item.product_name}</h2>
            <img src={item.product_image.url} alt={item.product_name} />
            <p>{item.product_price} €</p>
            <p>{item.product_details[1].TAILLE}</p>{" "}
            <p>{item.product_details[0].MARQUE}</p>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
