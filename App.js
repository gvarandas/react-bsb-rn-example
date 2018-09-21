import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card>
          <Text>
            Sed a ipsum et nisi ultricies pulvinar.
            Nulla lobortis, nibh id convallis fringilla, metus tortor aliquet mauris, feugiat vehicula nisl mauris et lectus. In vitae felis mauris.
            Aenean fermentum blandit erat et maximus. In magna tortor, tincidunt id elit vel, condimentum ornare massa. Maecenas sed arcu est
          </Text>
        </Card>
        <Card>
          <Text>
            Suspendisse aliquet est id congue lacinia.
            Aliquam elementum ligula ligula, quis suscipit lectus semper id.
            Pellentesque posuere justo eu urna viverra pellentesque. Vestibulum euismod dolor vel ante euismod aliquam.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tincidunt cursus elementum.
          </Text>
        </Card>
        <Card>
          <Text>
            Duis convallis euismod facilisis. Nam vehicula lectus ac ligula varius, et tincidunt ante dapibus.
            Sed rutrum sed ligula et lobortis. Cras eu venenatis nibh. Fusce at arcu at urna eleifend aliquam mollis mollis erat.
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
