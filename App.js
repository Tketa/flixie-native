import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';

import { StackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 5,
  },
  text: {
    fontSize: 30,
    color: 'red'
  },
});

const Navigator = StackNavigator({
  MovieListScreen: {
    screen: MovieList,
  },
  MovieDetailScreen: {
    screen: MovieDetail,
  },
}, {
  initialRouteName: 'MovieListScreen',
})

const apiKey = 'YOUR_API_KEY_HERE'


export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
      isLoading: false,
      page: 1,
    }

    this.giveMeMore = this.giveMeMore.bind(this);
  }

  async componentWillMount() {
    this.giveMeMore();
  }

  async giveMeMore() {
    this.setState({
      isLoading: true,
    });

    moreData = await fetch('http://api.themoviedb.org/3/movie/popular?api_key=' + apiKey + '&page=' + this.state.page)
    moreDataJson = await moreData.json();

    this.setState({
      movies: this.state.movies.concat(moreDataJson.results),
      isLoading: false,
      page: this.state.page + 1,
    })
  }

  render() {
    const props = {
      movies: this.state.movies,
      isLoading: this.state.isLoading,
      onLoadMore: this.giveMeMore,
    }
  
    
    return <Navigator screenProps={props} />
  }
}
