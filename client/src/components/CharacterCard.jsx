import React from "react";
import { Link } from "react-router-dom";
import characterCard from "../cssModules/CharacterCard.module.css";

/* Aqui van a tomar cada una de la data que se envio desde Cards y van a mostrarla como si fuese una tarjeta
en el orden que les guste */

export default function CharacterCard({ id, name, img }) {
  return (
    <div className={characterCard.container}>
      <Link className={characterCard.link} to={`/details/${id}`}>
        <p className={characterCard.text}>{name}</p>
      </Link>
      <img className={characterCard.img} src={img} alt="img" />
    </div>
  );
}
