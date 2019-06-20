import React from 'react';
import { shape, string } from 'prop-types';

const Character = ({ character }) => <li>{character.name}</li>;

Character.propTypes = {
  character: shape({ name: string.isRequired }).isRequired,
};

export default Character;
