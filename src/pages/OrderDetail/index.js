import axios from 'axios';
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';
import {API_HOST} from '../../config';
import {getData} from '../../utils';

const OrderDetail = ({navigation, route}) => {
  const order = route.params;

  const onCancel = () => {
    const data = {
      status: 'CANCELLED',
    };
    getData('token').then((resToken) => {
      axios
        .post(`${API_HOST.url}/transaction/${order.id}`, data, {
          headers: {
            Authorization: resToken.value,
          },
        })
        .then((res) => {
          navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        })
        .catch((err) => {
          console.log('err: ', err);
        });
    });
  };
  return (
    <ScrollView style={styles.page}>
      <Header
        title="Payment"
        subTitle="You deserve better meal"
        onBack={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.content}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type="order-summary"
          image={{uri: order.food.picturePath}}
          name={order.food.name}
          items={order.quantity}
          price={order.food.price}
        />
        <Gap height={16} />
        <Text style={styles.label}>Detail Transaction</Text>
        <ItemValue
          label={order.food.name}
          value={order.food.price * order.quantity}
          type="currency"
        />
        <ItemValue label="Driver" value={50000} type="currency" />
        <ItemValue
          label="Tax 10%"
          value={(10 / 100) * order.food.price * order.quantity}
          type="currency"
        />
        <ItemValue
          label="Total Price"
          value={order.total}
          valueColor="#1ABC9C"
          type="currency"
        />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label="Name" value={order.user.name} />
        <ItemValue label="Phone No." value={order.user.phoneNumber} />
        <ItemValue label="Address" value={order.user.address} />
        <ItemValue label="House No." value={order.user.houseNumber} />
        <ItemValue label="City" value={order.user.city} />
      </View>

      <View style={styles.content}>
        <Text style={styles.label}>Order Status:</Text>
        <ItemValue
          label={`#FM-${order.id}`}
          value={order.status}
          valueColor={order.status === 'CANCELLED' ? '#D9435E' : '#1ABC9C'}
        />
      </View>
      {order.status === 'PENDING' && (
        <View style={styles.button}>
          <Button
            text="Cancel My Order"
            onPress={onCancel}
            color="#D9435E"
            textColor="white"
          />
        </View>
      )}

      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  content: {paddingHorizontal: 24, paddingVertical: 16, marginTop: 24},
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
    marginBottom: 8,
  },
  button: {paddingHorizontal: 24, marginTop: 24},
});
