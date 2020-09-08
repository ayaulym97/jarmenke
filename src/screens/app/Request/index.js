import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {ScrollBtns, ControlPanel} from '../../../components';
import RowItem from './components/RowItem';
import {Theme, hp, normalize} from '../../../utils';

export default class Request extends Component {
  state = {
    category: 'Овощи',
    categories: [{title: 'Овощи'}, {title: 'Мясо'}],
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
  handleCategory = (text) => {
    this.setState({
      category: text,
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Заказы</Text>
          <ScrollBtns
            selected={this.state.category}
            data={this.state.categories}
            onPress={this.handleCategory}
          />
          <ControlPanel />
        </View>
        <FlatList
          contentContainerStyle={styles.list}
          data={this.state.request}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={(item) => (
            <RowItem
              item={item}
              onPress={() => this.props.navigation.navigate('Offer')}
            />
          )}
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
