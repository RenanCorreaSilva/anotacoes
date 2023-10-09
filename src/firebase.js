import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import 'firebase/compat/functions';


const firebaseapp = firebase.initializeApp ({
    apiKey: "AIzaSyDsQASKJjycX-vP8kkg2vbe3SGKtormH_w",
    authDomain: "bloco-de-anotacoes-1dd2f.firebaseapp.com",
    projectId: "bloco-de-anotacoes-1dd2f",
    storageBucket: "bloco-de-anotacoes-1dd2f.appspot.com",
    messagingSenderId: "772519039776",
    appId: "1:772519039776:web:213c539d0eb0d5c5a23d45",
    measurementId: "G-T5GSCM0TJV"

});

const db = firebase.firestore()
const auth = firebase.auth()
const storage = firebase.storage()
const functions = firebase.functions()


export {db, auth, storage, functions}