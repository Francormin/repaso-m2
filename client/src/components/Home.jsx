import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../actions";
import home from "../cssModules/Home.module.css";

/* Dentro de este componente tendran que crear y renderizar un titulo que indique donde estas (en este caso seria en home),
un Link el cual deberia redirigir a la ruta '/create' con un texto que diga su accion y el componente Cards pasandole
por props el estado global hecho en el reducer. */

/* Recuerda que ni bien se renderiza el componente necesitara que se ejecute una accion para obtener los personajes,
lo cual puedes realizarlo mas adelante */

export default function Home() {
  const characters = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  return (
    <div className={home.container}>
      <div className={home.title}>
        <h1>Breaking Bad Characters</h1>
      </div>

      <Link to="/create">
        <button>Create a New Character</button>
      </Link>

      <Cards characters={characters} />
    </div>
  );
}
