/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Dimensions, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';
import {ItemListFood} from '..';
import {getFoodDataByTypes} from '../../../redux/action';

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
  const dispatch = useDispatch();
  const {newTaste} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('new_food'));
  }, [dispatch]);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
            price={item.price}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {popular} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('popular'));
  }, [dispatch]);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
            price={item.price}
          />
        );
      })}
    </View>
  );
};

const Recommended = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {recommended} = useSelector((state) => state.homeReducer);

  useEffect(() => {
    dispatch(getFoodDataByTypes('recommended'));
  }, [dispatch]);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            type="product"
            image={{uri: item.picturePath}}
            name={item.name}
            onPress={() => navigation.navigate('FoodDetail', item)}
            rating={item.rate}
            price={item.price}
          />
        );
      })}
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
      style={{backgroundColor: 'white', flex: 1}}
    />
  );
};

export default HomeTabSection;
