import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyD_P0TqzJayB9agVKnt4HlsfiB0aNHZAKA",
  authDomain: "new-shopping-cart-7b2f3.firebaseapp.com",
  databaseURL: "https://new-shopping-cart-7b2f3.firebaseio.com",
  projectId: "new-shopping-cart-7b2f3",
  storageBucket: "new-shopping-cart-7b2f3.appspot.com",
  messagingSenderId: "703446039866"
};
firebase.initializeApp(config);
export default firebase;
