import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label, value, onSelectChage}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={value}
          onValueChange={(itemValue) => onSelectChage(itemValue)}>
          <Picker.Item label="Jakarta" value="Jakarta" />
          <Picker.Item label="Bandung" value="Bandung" />
          <Picker.Item label="Semarang" value="Semarang" />
          <Picker.Item label="Yogyakarta" value="Yogyakarta" />
          <Picker.Item label="Surabaya" value="Surabaya" />
          <Picker.Item label="Makassar" value="Makassar" />
          <Picker.Item label="Banjarmasin" value="Banjarmasin" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#020202',
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
