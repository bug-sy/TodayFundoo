import firebase from 'firebase/app'
import firebas from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyB1Ob3WTRRvGST5FKvWeGGiGvHF4xQUuPg",
    authDomain: "newsignup-91161.firebaseapp.com",
    databaseURL: "https://newsignup-91161.firebaseio.com",
    projectId: "newsignup-91161",
    storageBucket: "newsignup-91161.appspot.com",
    messagingSenderId: "905842020024",
    appId: "1:905842020024:web:06332512e92df8bfb1ae4d",
    measurementId: "G-BZSQN0JHPH"

}

firebase.initializeApp(config)



//shortcut to auth method
const firebaseAuth = firebase.auth()

const db = firebase.firestore()

var newPostRef = firebas.database();

export function createUserNote( obj ){
    const uid = localStorage.getItem('uid')
    console.log(uid +' : uid ')
    console.log("Trash" + obj.ArchiveStatus)
    console.log("Archive " + obj.ArchiveStatus)
    console.log("Pin" + obj.pin)
    newPostRef.ref('/users /' + uid + '/notes/').push(obj);
}

export function updateUserNote(obj,key) {
    const uid = localStorage.getItem('uid')
    console.log(uid + ' : uid ')
    console.log("Trash" + obj.ArchiveStatus)
    console.log("Archive " + obj.ArchiveStatus)
    console.log("Pin" + obj.pin)
    console.log("Title" + obj.title)
    console.log("Data" + obj.dataOfNote)
    newPostRef.ref('/users /' + uid + '/notes/' + key).update(obj);
}



export function getNotes(callback){
    const uid = localStorage.getItem('uid')
    console.log('app : ' + uid);

    newPostRef.ref('/users /'+uid+'/notes/').on('value',(snapshot)=>
    {
        console.log('uid 23',uid)
        console.log("get Notes",snapshot.val())
        callback(snapshot.val())
    })
}

export function updateNote(key, obj){
    const uid = localStorage.getItem('uid')
    console.log(uid+"uid is")
    console.log("key is "+ key)
    console.log("Object" + JSON.stringify(obj))
    newPostRef.ref('/users /' + uid + '/notes/' + key).update(obj);

}













const boardsRef = db.collection('boa')
const listsRef = db.collection('lists')
const cardsRef = db.collection('cards')


export { firebaseAuth, boardsRef, listsRef, cardsRef, newPostRef }


