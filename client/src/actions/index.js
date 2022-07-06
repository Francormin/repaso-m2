import axios from 'axios';

/* En actions vas a tener que crear las acciones que se despacharan en el reducer acompañadas
de las constantes ya exportadas */

export const GET_CHARACTERS = 'GET_CHARACTERS';
export const CHARACTER_DETAILS = 'CHARACTER_DETAILS';
export const CREATE_CHARACTER = 'CREATE_CHARACTER';

export const getCharacters = () => async (dispatch) => {
  try {
    const characters = await axios.get('http://localhost:3001/characters');
    return dispatch({
      type: GET_CHARACTERS,
      payload: characters.data,
    });
  } catch (error) {
    return new Error(error);
  }
};

// export function getCharacters() {
//   return function (dispatch) {
//     return fetch('http://localhost:3001/characters')
//       .then((response) => response.json())
//       .then((data) =>
//         dispatch({
//           type: GET_CHARACTERS,
//           payload: data,
//         })
//       )
//       .catch((error) => new Error(error));
//   };
// }

export const getCharacter = (id) => async (dispatch) => {
  try {
    const character = await axios.get(`http://localhost:3001/characters/${id}`);
    return dispatch({
      type: CHARACTER_DETAILS,
      payload: character.data[0],
    });
  } catch (error) {
    return new Error(error);
  }
};

// export function getCharacter(id) {
//   return function (dispatch) {
//     return fetch(`http://localhost:3001/characters/${id}`)
//       .then((response) => response.json())
//       .then((data) =>
//         dispatch({
//           type: CHARACTER_DETAILS,
//           payload: data[0],
//         })
//       )
//       .catch((error) => new Error(error));
//   };
// }

export const createCharacter = ({ name, nickname, img }) => {
  try {
    return {
      type: CREATE_CHARACTER,
      payload: {
        name,
        nickname,
        img,
      },
    };
  } catch (error) {
    return new Error(error);
  }
};
