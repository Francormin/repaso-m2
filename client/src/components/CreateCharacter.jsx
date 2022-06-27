import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { createCharacter } from "../actions";
import createCharacterCss from "../cssModules/CreateCharacter.module.css";

/* En este componente tendran que hacer un formulario controlado en el cual tendra que validarse
que todos los inputs tengan algo dentro. Es opcional mostrar un mensaje de error */

export default function CreateCharacter() {
  const [character, setCharacter] = useState({
    name: "",
    nickname: "",
    img: "",
  });

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  // const history = useHistory();

  function validate() {
    // character.name = character.name !== "" ? setDisabled(false) : null;
    // character.nickname = character.nickname !== "" ? setDisabled(false) : null;
    // character.img = character.img !== "" ? setDisabled(false) : null;
    if (
      character.name !== "" &&
      character.img !== "" &&
      character.nickname !== ""
    ) {
      setDisabled(false);
    }
  }

  useEffect(() => {
    validate();
  }, [character]);

  function handleOnChange(e) {
    setCharacter(() => ({
      ...character,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(createCharacter(character));
    setCharacter({ name: "", nickname: "", img: "" });
    // history.push("/");
  }

  return (
    <div className={createCharacterCss.container}>
      <h1 className={createCharacterCss.title}>Create Your Character</h1>

      <form
        className={createCharacterCss.form}
        onSubmit={(e) => handleOnSubmit(e)}
      >
        <div className={createCharacterCss.contName}>
          <label>Name: </label>
          <input
            type="text"
            name="name"
            value={character.name}
            onChange={(e) => handleOnChange(e)}
            required={true}
            className={createCharacterCss.input}
          />
        </div>

        <div className={createCharacterCss.contName}>
          <label>Nickname: </label>
          <input
            type="text"
            name="nickname"
            value={character.nickname}
            onChange={(e) => handleOnChange(e)}
            required={true}
            className={createCharacterCss.input}
          />
        </div>

        <div className={createCharacterCss.contName}>
          <label>Image: </label>
          <input
            type="text"
            name="img"
            value={character.img}
            onChange={(e) => handleOnChange(e)}
            required={true}
            className={createCharacterCss.input}
          />
        </div>

        <button
          className={createCharacterCss.submit}
          type="submit"
          disabled={disabled}
        >
          Submit
        </button>
      </form>

      <button className={createCharacterCss.button}>
        <Link className={createCharacterCss.link} to="/">
          Go back
        </Link>
      </button>
    </div>
  );
}
