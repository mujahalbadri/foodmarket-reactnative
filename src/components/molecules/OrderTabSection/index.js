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

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy1}
        name={'Cherry Healthy'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy2}
        name={'Avosalado'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={2}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Kari Sleman'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={3}
        price="289.000"
      />
      <ItemListFood
        image={FoodDummy4}
        name={'Kopi Kudda'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="in-progress"
        items={1}
        price="289.000"
      />
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        image={FoodDummy2}
        name={'Avosalado'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={1}
        price="289.000"
        date="Jun 12, 14:00"
      />
      <ItemListFood
        image={FoodDummy3}
        name={'Kari Sleman'}
        onPress={() => navigation.navigate('OrderDetail')}
        type="past-orders"
        items={1}
        price="289.000"
        date="Mei 2, 09:00"
        status="Cancelled"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
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

export default OrderTabSection;
