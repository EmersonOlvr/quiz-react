import firebase from 'firebase';
import Rebase from 're-base';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCBhaoI_MVrTwEv5VOl0wAo63qQTV_WJ0E",
    authDomain: "quiz-react-udemy.firebaseapp.com",
    databaseURL: "https://quiz-react-udemy.firebaseio.com",
    projectId: "quiz-react-udemy",
    storageBucket: "quiz-react-udemy.appspot.com",
    messagingSenderId: "726672011359",
    appId: "1:726672011359:web:cdb37e987f45be8950abea",
    measurementId: "G-KP9543TL26"
});
const db = firebase.database(firebaseConfig)
const config = Rebase.createClass(db)

export const providers = {
    'facebook': new firebase.auth.FacebookAuthProvider(),
    'twitter': new firebase.auth.TwitterAuthProvider(),
    'google': new firebase.auth.GoogleAuthProvider()
}
export const auth = firebaseConfig.auth()
export default config