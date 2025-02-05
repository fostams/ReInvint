import React from "react";
import "./ClothingCard.scss";

const ClothingCard = ({ item }) => {
  return (
    <div className="clothing-card">
      <img src={item.image} alt={item.category} className="clothing-card__img" />
      <div className="clothing-card__info">
        <h3 className="clothing-card__category">{item.category}</h3>
        <p className="clothing-card__details">{item.color} | {item.material}</p>
        <p className="clothing-card__brand">{item.brand}</p>
        <p className="clothing-card__notes">{item.notes}</p>
      </div>
    </div>
  );
};

export default ClothingCard;