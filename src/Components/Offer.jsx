import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offers/${id}`
      );
      setData(result.data);
    };
    fetchData();
  }, [id]);

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
