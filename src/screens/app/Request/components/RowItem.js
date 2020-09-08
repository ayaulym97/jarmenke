import React from 'react';
import {StyleSheet, Image, Text, View} from 'react-native';
import {Rating} from 'react-native-ratings';
import StarRating from 'react-native-star-rating';
import {normalize, SCREEN_WIDTH, Theme, hp} from '../../../../utils';
import {Button, IoniconsBtn} from '../../../../components';
const RowItem = ({item, onPress}) => {
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
          <View style={styles.rating}>
            <StarRating
              disabled={true}
              starSize={normalize(14)}
              maxStars={5}
              rating={4}
              emptyStarColor={Theme.colors.gray}
              fullStarColor={Theme.colors.yellow}
            />
            <Text style={styles.ratingTxt}>(4)</Text>
          </View>
          <Text style={styles.title}>Туша</Text>
          <Text style={styles.priceTxt}>2400 т</Text>

          <Button
            text="Предложить"
            style={styles.offerBtn}
            textStyle={styles.offerTxt}
            onPress={onPress}
          />
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
    flex: 1,
    marginBottom: normalize(20),

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
    overflow: 'hidden',
    width: SCREEN_WIDTH * 0.43,
    aspectRatio: 0.5,
    borderRadius: normalize(8),
    backgroundColor: Theme.colors.white,
  },
  rating: {
    flexDirection: 'row',
  },
  ratingTxt: {
    fontSize: normalize(12),
    color: Theme.colors.gray,
  },
  img: {
    flex: 1,
  },
  content: {
    flex: 2,
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(6),
  },
  title: {
    marginTop: normalize(10),
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
  offerBtn: {
    marginTop: normalize(18),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Theme.colors.red,
    paddingVertical: normalize(11),
    shadowColor: 'rgb(0, 0, 0)',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  offerTxt: {
    fontSize: normalize(14),
    color: Theme.colors.white,
  },
  getInTouchBtn: {
    marginTop: normalize(10),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Theme.colors.black,
    paddingVertical: normalize(11),
  },
  getInTouchTxt: {
    fontSize: normalize(14),
    color: Theme.colors.black,
  },
  favBtn: {
    position: 'absolute',
    top: -normalize(13),
    right: normalize(10),
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
  priceTxt:{
    marginTop: normalize(24),
    fontSize: normalize(14),
    color: Theme.colors.green,
  }
});
export default RowItem;
