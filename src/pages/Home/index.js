import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {FoodCard, Gap, HomeProfile, HomeTabSection} from '../../components';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodCardContainer}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} name={'Cherry Healthy'} />
              <FoodCard image={FoodDummy2} name={'Avosalado'} />
              <FoodCard image={FoodDummy3} name={'Kari Sleman'} />
              <FoodCard image={FoodDummy4} name={'Kopi Kudda'} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  foodCardContainer: {flexDirection: 'row', marginVertical: 24},
  tabContainer: {flex: 1},
});
