import React, { useEffect, useState } from 'react'; // useCallback
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'; // useHistory
import { createCharacter } from '../actions';
import createCharacterCss from '../cssModules/CreateCharacter.module.css';

/* En este componente tendran que hacer un formulario controlado en el cual tendra que validarse
que todos los inputs tengan algo dentro. Es opcional mostrar un mensaje de error */

export default function CreateCharacter() {
  const [character, setCharacter] = useState({
    name: '',
    nickname: '',
    img: '',
  });

  const [disabled, setDisabled] = useState(true);

  const dispatch = useDispatch();
  // const history = useHistory();

  useEffect(() => {
    // Primera solución
    function validate() {
      // character.name = character.name !== "" ? setDisabled(false) : null;
      // character.nickname = character.nickname !== "" ? setDisabled(false) : null;
      // character.img = character.img !== "" ? setDisabled(false) : null;
      if (character.name !== '' && character.img !== '' && character.nickname !== '') {
        setDisabled(false);
      }
    }

    validate();
  }, [character]);

  // // Segunda solución
  // const validate2 = useCallback(() => {
  //   // character.name = character.name !== "" ? setDisabled(false) : null;
  //   // character.nickname = character.nickname !== "" ? setDisabled(false) : null;
  //   // character.img = character.img !== "" ? setDisabled(false) : null;
  //   if (character.name !== '' && character.img !== '' && character.nickname !== '') {
  //     setDisabled(false);
  //   }
  // }, [character]);

  // useEffect(() => {
  //   // Segunda solución
  //   validate2();
  // }, [validate2]);

  function handleOnChange(e) {
    setCharacter(() => ({
      ...character,
      [e.target.name]: e.target.value,
    }));
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    dispatch(createCharacter(character));
    setCharacter({
      name: '',
      nickname: '',
      img: '',
    });
    // history.push("/");
  }

  return (
    <div className={createCharacterCss.container}>
      <h1 className={createCharacterCss.title}>Create Your Character</h1>

      <form className={createCharacterCss.form} onSubmit={(e) => handleOnSubmit(e)}>
        <div className={createCharacterCss.contName}>
          <label htmlFor="name">
            Name:
            <input
              id="name"
              type="text"
              name="name"
              value={character.name}
              onChange={(e) => handleOnChange(e)}
              required
              className={createCharacterCss.input}
            />
          </label>
        </div>

        <div className={createCharacterCss.contName}>
          <label htmlFor="nickname">
            Nickname:
            <input
              id="nickname"
              type="text"
              name="nickname"
              value={character.nickname}
              onChange={(e) => handleOnChange(e)}
              required
              className={createCharacterCss.input}
            />
          </label>
        </div>

        <div className={createCharacterCss.contName}>
          <label htmlFor="image">
            Image:
            <input
              id="image"
              type="text"
              name="img"
              value={character.img}
              onChange={(e) => handleOnChange(e)}
              required
              className={createCharacterCss.input}
            />
          </label>
        </div>

        <button className={createCharacterCss.submit} type="submit" disabled={disabled}>
          Submit
        </button>
      </form>

      <button type="button" className={createCharacterCss.button}>
        <Link className={createCharacterCss.link} to="/">
          Go back
        </Link>
      </button>
    </div>
  );
}
