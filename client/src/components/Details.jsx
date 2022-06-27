import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCharacter } from "../actions";
import details from "../cssModules/Details.module.css";
import gif from "../assets/loading.gif";

/* Commponente de detalles, en el cual renderizaran los datos del personaje que se desee, se toma el
id del personaje el cual viene por url y a partir de una action pasandole como parametro el id del personaje
se deberia poder ver en la pagina un h1 con el nombre, un img con la imagen y dos p con el nickname y las occupations */

export default function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const characterDetails = useSelector((state) => state.details);
  const charactersCreated = useSelector((state) => state.charactersCreated);
  const characterCreatedDetail = charactersCreated.find(
    (character) => character.id == id
  );

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getCharacter(id));
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading || !!characterDetails.length ? (
        <div className={details.container}>
          <img src={gif} alt="gif" />
        </div>
      ) : characterCreatedDetail ? (
        <div>
          <div className={details.divImg}>
            <img
              className={details.img}
              src={characterCreatedDetail.img}
              alt="img"
            />
          </div>
          <div className={details.divData}>
            <div className={details.info}>
              <h1>{characterCreatedDetail.name}</h1>
              <p>Nickname: {characterCreatedDetail.nickname}</p>
            </div>
          </div>
          <div className={details.divLink}>
            <Link className={details.link} to="/">
              Go back
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className={details.divImg}>
            <img className={details.img} src={characterDetails.img} alt="img" />
          </div>
          <div className={details.divData}>
            <div className={details.info}>
              <h1>{characterDetails.name}</h1>
              <p>Nickname: {characterDetails.nickname}</p>
              <p>
                Occupations:
                {characterDetails.occupation?.map((o, i) => {
                  return <li key={i}>{o}</li>;
                })}
              </p>
            </div>
          </div>
          <div className={details.divLink}>
            <Link className={details.link} to="/">
              Go back
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
