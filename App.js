import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from './components/Home';
import List from './components/List';
import ArticleList from './components/ArticleList';
import Article from './screens/Articles';
import Alarm from './components/Alert';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const RootStack = createStackNavigator({
  Articles: ArticleList,
  Article: Article,
  Home: Home,
  Alert: Alarm,
  HomeScreen: HomeScreen,
  Details: DetailsScreen,
},
{
  initialRouteName: 'HomeScreen',
}  
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
