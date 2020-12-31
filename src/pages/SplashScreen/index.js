import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.gap} />
      <Text style={styles.text}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gap: {
    height: 38,
  },
  text: {
    fontSize: 32,
    color: '#020202',
    fontFamily: 'Poppins-Medium',
  },
});
