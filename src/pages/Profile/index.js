import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy2} from '../../assets';
import {ProfileTabSection} from '../../components/molecules';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image source={ProfileDummy2} style={styles.photoContainer} />
          </View>
        </View>
        <Text style={styles.name}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoContainer: {
    padding: 24,
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0f0f0',
  },
  profileDetail: {paddingBottom: 26},
  content: {flex: 1, marginTop: 24},
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    color: '#8D92A3',
    textAlign: 'center',
  },
});
