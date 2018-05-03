import React from 'react';
import PropTypes from 'prop-types';
import { 
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableHighlight,
} from 'react-native';

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

export default class MovieCard extends React.Component {
  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => this.props.navigation.navigate('MovieDetailScreen', { movie: this.props.movie })} >
          <Image style={styles.image} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + this.props.movie.poster_path }} />
        </TouchableHighlight>
        <Text>{this.props.movie.title}</Text>
      </View>
      
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.object
};
