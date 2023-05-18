import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers/:id"
      );
      setData(result.data.offers._id);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>{item.product_name}</h2>
      <img src={item.product_image.url} alt={item.product_name} />
      <p>{item.product_price} €</p>
      <p>{item.product_details[1].TAILLE}</p>
      <p>{item.product_details[0].MARQUE}</p>
    </div>
  );
};

export default Offer;
