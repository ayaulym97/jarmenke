import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import RowItem from './components/RowItem';
import {Theme, hp, normalize} from '../../../utils';
import {Header} from '../../../components';

export default class Offers extends Component {
  state = {
    request: [
      {
        title: 'FIRST',
      },
      {
        title: 'FIRST',
      },
      {
        title: 'FIRST',
      },
      {
        title: 'FIRST',
      },
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        <Header title="Предложения" />
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.request}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => <RowItem item={item} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  list: {
    flexGrow: 1,
    marginLeft: '5%',
    paddingTop: normalize(24),
  },

  header: {
    backgroundColor: Theme.colors.white,

    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: normalize(30),
    fontWeight: Theme.weight.Bold,
    color: Theme.colors.black,
    marginHorizontal: '5%',
    marginVertical: normalize(10),
  },
});
