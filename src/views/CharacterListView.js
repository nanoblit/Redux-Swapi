import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  shape, arrayOf, string, bool, func,
} from 'prop-types';

import { CharacterList } from '../components';
import { fetchCharacters as fetchCharactersAction } from '../actions';

const CharacterListView = ({
  fetchCharacters, fetching, fetchingFailed, characters,
}) => {
  useEffect(() => {
    fetchCharacters();
  }, []);

  if (fetchingFailed) {
    return <div>Couldn&apos;t fetch characters</div>;
  } if (fetching) {
    return <div>Fetching characters...</div>;
  }
  return (
    <div className="CharactersList_wrapper">
      <CharacterList characters={characters} />
    </div>
  );
};

CharacterListView.propTypes = {
  fetchCharacters: func.isRequired,
  characters: arrayOf(shape({ name: string })).isRequired,
  fetching: bool.isRequired,
  fetchingFailed: bool.isRequired,
};

const mapStateToProps = state => ({
  fetching: state.fetching,
  characters: state.characters,
  fetchingFailed: state.fetchingFailed,
});

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  {
    fetchCharacters: fetchCharactersAction,
  },
)(CharacterListView);
