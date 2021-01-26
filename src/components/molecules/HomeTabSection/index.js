/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Dimensions, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {ItemListFood} from '..';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '3%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        name={'Cherry Healthy'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy2}
        name={'Avosalado'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Kari Sleman'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy4}
        name={'Kopi Kudda'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy2}
        name={'Avosalado'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Kari Sleman'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        name={'Cherry Healthy'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy4}
        name={'Kopi Kudda'}
        onPress={() => navigation.navigate('FoodDetail')}
        rating={4.5}
        price="289.000"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recommended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recommended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'wh'}}
    />
  );
};

export default HomeTabSection;
