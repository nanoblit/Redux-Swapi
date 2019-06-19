import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  shape, arrayOf, string, bool,
} from 'prop-types';

import { CharacterList } from '../components';
// import actions

const CharacterListView = ({ fetching, characters }) => {
  useEffect(() => {}, []);

  if (fetching) {
    return <div>Fetching characters...</div>;
  }
  return (
    <div className="CharactersList_wrapper">
      <CharacterList characters={characters} />
    </div>
  );
};

CharacterListView.propTypes = {
  characters: arrayOf(shape({ name: string })).isRequired,
  fetching: bool.isRequired,
};

const mapStateToProps = state => ({ fetching: state.fetching, characters: state.characters });

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    /* action creators go here */
  },
)(CharacterListView);
