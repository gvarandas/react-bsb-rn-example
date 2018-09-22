import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

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

  _keyExtractor(item) {
    return item.id.toString();
  }

  renderListHeader() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>RICK AND MORTY</Text>
        <Text style={styles.title}>CHARACTERS</Text>
      </View>
    );
  }

  renderCharacter({ item: character }) {
    const { name, status, gender, image } = character;
    return (
      <Card>
        <View style={styles.character}>
          <View style={styles.character__info}>
            <Text>Name: {name}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Status: {status}</Text>
          </View>
          <View>
            <Image style={styles.character__avatar} source={{ uri: image }} />
          </View>
        </View>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.characters}
          renderItem={this.renderCharacter}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this.renderListHeader}
          stickyHeaderIndices={[0]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02afc5'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  character: {
    flexDirection: 'row'
  },
  character__info: {
    flex: 1,
    justifyContent: 'center',
  },
  character__avatar: {
    width: 60,
    height: 60,
  }
});
