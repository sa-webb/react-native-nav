import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator, createAppContainer, FlatList } from 'react-navigation';

const data = new Array(30).fill(0);

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={({index}) => <Text style={{textAlign: 'center'}}>Home - {index}</Text>}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <FlatList
          data={data}
          renderItem={({index}) => (
            <Text style={{
              textAlign: 'center',
              width: '100%',
              height: 100
            }}>Settings - {index}</Text>
          )}
          contentContainerStyle={{ padding: 10 }}
        />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Settings: { screen: SettingsScreen },
});

export default createAppContainer(TabNavigator);