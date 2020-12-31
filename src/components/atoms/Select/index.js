import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-community/picker';

const Select = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input}>
        <Picker
        // selectedValue={this.state.language}
        // onValueChange={(itemValue, itemIndex) =>
        //   this.setState({language: itemValue})
        // }
        >
          <Picker.Item label="Jakarta" value="jakarta" />
          <Picker.Item label="Bandung" value="bandung" />
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
