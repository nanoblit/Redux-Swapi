import React from 'react';
import { shape, arrayOf, string } from 'prop-types';

import Character from './Character';

const CharacterList = ({ characters }) => (
  <ul>
    {characters.map(character => (
      <Character key={character.name} character={character} />
    ))}
  </ul>
);

CharacterList.propTypes = {
  characters: arrayOf(shape({ name: string })),
};

CharacterList.defaultProps = {
  characters: [],
};

export default CharacterList;
