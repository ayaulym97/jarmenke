import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {normalize, Theme} from '../utils';
import {CustomIcon} from '.';
const ControlPanel = ({}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Ionicons
          name="ios-filter-sharp"
          color={Theme.colors.black}
          size={normalize(25)}
        />
        <Text style={styles.title}>Фильтр</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <CustomIcon
          name="sort"
          color={Theme.colors.black}
          size={normalize(20)}
        />
        <Text style={styles.title}>По возрастанию цены</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <CustomIcon
          name="grid"
          color={Theme.colors.black}
          size={normalize(15)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ControlPanel;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop:normalize(16),
    marginBottom:normalize(7)
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(12),
    color: Theme.colors.black,
    fontWeight: Theme.weight.Light,
    marginLeft: normalize(7),
  },
});
