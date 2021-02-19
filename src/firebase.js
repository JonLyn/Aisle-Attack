import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyC5yKaZnAfLiXauKrMcaIavutiSwzmhv6A",
  authDomain: "aisle-attack.firebaseapp.com",
  projectId: "aisle-attack",
  storageBucket: "aisle-attack.appspot.com",
  messagingSenderId: "234733929900",
  appId: "1:234733929900:web:06c65f8b11d8427ceda609"
};

firebase.initializeApp(firebaseConfig);

export default firebase;