import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  console.log(id);

  // Le Hook useEffect de React est appelé. C'est une fonction qui nous permet d'exécuter du code
  // après chaque rendu du composant. Dans ce cas, le tableau de dépendances est vide, donc ce code
  // ne s'exécutera qu'une fois après le premier rendu du composant.
  useEffect(() => {
    // On déclare une nouvelle fonction asynchrone, fetchData.
    const fetchData = async () => {
      // On fait une requête GET à l'API en utilisant axios. On utilise l'opérateur await pour
      // s'assurer que JavaScript attend la résolution de cette promesse avant de continuer. L'URL
      // de l'API utilise l'interpolation de chaînes pour inclure l'ID de l'offre que nous
      // voulons récupérer.
      const result = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );

      // On utilise la fonction setData pour mettre à jour l'état de notre composant avec les
      // données que nous avons reçues de l'API.
      setData(result.data);
    };

    // Après avoir déclaré la fonction fetchData, on l'appelle pour qu'elle s'exécute.
    fetchData();

    // On passe un tableau vide en deuxième argument à useEffect pour lui dire de ne déclencher cet
    // effet qu'après le premier rendu du composant et non pas après chaque rendu.
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h2>{data.product_name}</h2>
          <img src={data.product_image.url} alt={data.product_name} />
          <p>{data.product_price} €</p>
          <p>{data.product_details[1].TAILLE}</p>
          <p>{data.product_details[0].MARQUE}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Offer;
