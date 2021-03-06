import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {normalize, Theme, hp} from '../../../../utils';
import {Button, IoniconsBtn} from '../../../../components';
const ColumnItem = ({item, onPress}) => {
  return (
    <View key={item.title} style={styles.overView}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          resizeMode="cover"
          source={{
            uri:
              'https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/10/redMeat-849360782-770x553-650x428.jpg',
          }}
        />
        <View style={styles.content}>
          <Text style={styles.title}>Туша</Text>
          <Text style={styles.subTitle}>
            Нарезается на порции поперёк волокон толщиной 1,5-2 см, массой 300
            до 550 гр каждая порция...
          </Text>
          <Button
            text="Связаться"
            style={styles.getInTouchBtn}
            textStyle={styles.getInTouchTxt}
            onPress={onPress}
          />
        </View>
      </View>
      <IoniconsBtn
        name="heart-outline" //heart
        color={Theme.colors.gray}
        size={normalize(20)}
        containerStyle={[styles.favBtn, styles.inactiveFavBtn]}
        style={{marginTop: normalize(2)}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  overView: {
    width: '90%',
    alignSelf: 'center',
    marginTop: normalize(24),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: normalize(8),
    backgroundColor: Theme.colors.white,
   
  },
  img: {
    flex: 1,
  },
  content: {
    flex: 2,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(9),
  },
  title: {
    fontSize: normalize(14),
    color: Theme.colors.black,
    fontWeight: Theme.weight.Bold,
  },
  subTitle: {
    fontSize: normalize(10),
    color: Theme.colors.gray,
    fontWeight: Theme.weight.Light,
    marginTop: normalize(8),
  },
  getInTouchBtn: {
    marginTop: normalize(14),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.red,
    paddingVertical: normalize(12),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  getInTouchTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
  favBtn: {
    position: 'absolute',
    top: -normalize(13),
    right: -normalize(10),
    width: normalize(36),
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(36),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  activeFavBtn: {
    backgroundColor: Theme.colors.red,
  },
  inactiveFavBtn: {
    backgroundColor: Theme.colors.white,
  },
});
export default ColumnItem;
