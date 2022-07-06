import React from 'react';
import CharacterCard from './CharacterCard';
import cards from '../cssModules/Cards.module.css';

/* En este componente lo que tendran que hacer es mapear todas las CharacterCard pasandole por props la data que necesita
(vayan al componente para ver que necesita) */

export default function Cards({ characters }) {
  return (
    <div className={cards.container}>
      {characters?.map((character) => (
        <CharacterCard key={character.id} id={character.id} name={character.name} img={character.img} />
      ))}
    </div>
  );
}
