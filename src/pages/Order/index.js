import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components/molecules';

const Oreder = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={styles.content}>
          <Header title="Your Orders" subTitle="Wait for the best meal" />
          <View style={styles.tabContainer}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Oreder;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {flex: 1},
  tabContainer: {flex: 1, marginTop: 24},
});
