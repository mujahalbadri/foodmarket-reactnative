import axios from 'axios';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

const API_HOST = {
  url: 'http://10.0.2.2:8000/api',
};

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  axios
    .post(`${API_HOST.url}/register`, dataRegister)
    .then((res) => {
      console.log('data success: ', res.data);

      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;

      // Simpan storage data token
      storeData('token', {
        value: token,
      });

      // Upload Photo
      if (photoReducer.isUploadPhoto) {
        const photoForUpload = new FormData();
        photoForUpload.append('file', photoReducer);

        axios
          .post(`${API_HOST.url}/user/photo`, photoForUpload, {
            headers: {
              Authorization: token, // 'Bearer Token'
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resUpload) => {
            profile.profile_photo_url = `http://10.0.2.2:8000/storage/${resUpload.data.data[0]}`;
            // Simpan storage data user
            storeData('userProfile', profile);
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          })
          .catch((err) => {
            console.log('upload failed: ', err.response);
            showMessage('Upload Photo tidak berhasil');
            navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
          });
      } else {
        // Simpan storage data user
        storeData('userProfile', profile);
        navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      }
      // Loading animation
      dispatch(setLoading(false));
    })
    .catch((err) => {
      // Loading animation
      dispatch(setLoading(false));
      console.log('sign up error: ', err.response);
      showMessage(err?.response?.data?.meta?.message);
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  axios
    .post(`${API_HOST.url}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const profile = res.data.data.user;
      dispatch(setLoading(false));

      // Simpan storage data token
      storeData('token', {
        value: token,
      });

      // Simpan storage data user
      if (profile.profile_photo_path != null) {
        profile.profile_photo_url = `http://10.0.2.2:8000/storage/${res.data.data.user.profile_photo_path}`;
      }
      storeData('userProfile', profile);
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      console.log('error', err.response);
      dispatch(setLoading(false));
      showMessage('Email atau Password anda salah');
    });
};
