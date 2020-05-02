import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
  apiKey: 'AIzaSyDfxDDhJMT2PQbHU2RseqJUTRSQX89cXcU',
  authDomain: 'react-slack-clone-50626.firebaseapp.com',
  databaseURL: 'https://react-slack-clone-50626.firebaseio.com',
  projectId: 'react-slack-clone-50626',
  storageBucket: 'react-slack-clone-50626.appspot.com',
  messagingSenderId: '260893050048',
  appId: '1:260893050048:web:096887683e89c9fe8d1925',
  measurementId: 'G-JRV24VL4T9',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
