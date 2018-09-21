import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Card from './components/Card';

const API_HOST = 'https://rickandmortyapi.com/api/';

export default class App extends React.Component {
  
  state = {
    characters: [],
  }

  componentDidMount() {
    this._getCharacters();
  }

  async _getCharacters() {
    const response = await fetch(`${API_HOST}/character`);
    const { results: characters } = await response.json();
    this.setState({
      characters,
    });
  }

  renderCharacter = ({ item: character }) => {
    const { name, status, gender } = character;
    return (
      <Card>
        <Text>Name: {name}</Text>
        <Text>Gender: {gender}</Text>
        <Text>Status: {status}</Text>
      </Card>
    );
  }

  _keyExtractor = item => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.characters}
          renderItem={this.renderCharacter}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
    backgroundColor: '#d9d9d9',
    justifyContent: 'center',
  },
});
