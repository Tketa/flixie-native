import React from 'react';
import PropTypes from 'prop-types';
import { 
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import MovieCard from './MovieCard'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  }
});



export default class MovieList extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.screenProps.movies}
          keyExtractor={ (item) => `${item.id}` }
          renderItem={ ({item}) => (<MovieCard movie={item} />)}
          onEndReached={() => this.props.screenProps.onLoadMore()}
          onEndReachedThreshold={0.05}
        />
        {this.props.screenProps.isLoading ? <ActivityIndicator size="large" /> : null}
      </View>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  onLoadMore: PropTypes.func,
  isLoading: PropTypes.bool,
}
