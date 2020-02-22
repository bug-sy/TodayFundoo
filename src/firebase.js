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
var moment = require('moment');

export function createUserNote( obj ){
    const uid = localStorage.getItem('uid')
    console.log(uid +' : uid ')
    console.log("Trash" + obj.ArchiveStatus)
    console.log("Archive " + obj.ArchiveStatus)
    console.log("Pin" + obj.pin)
    newPostRef.ref('/users /' + uid + '/notes/').push(obj);
}

export function createReminderInNote(KeyOfNoteCard,dateTimeReminder) {
    const uid = localStorage.getItem('uid')
    console.log(uid + ' : uid ')
    const dateTimeString = dateTimeReminder.dateTimeReminder.toLocaleString('en-GB', { timeZone: 'UTC' })
    console.log("Modified dateTimeReminder ------>" + dateTimeString)
    newPostRef.ref('/users /' + uid + '/notes/' + KeyOfNoteCard + '/reminder/').set(dateTimeString);
    console.log("Added Date")
}

export function createLabelNote(labelData) {
    const uid = localStorage.getItem('uid')
    console.log("uid----->",uid,"labelData ------->",labelData)
    newPostRef.ref('/users /' + '/labels/').push(labelData);
    console.log("labelData entered in firebase")
}

export function createLabelNoteInNotes(KeyOfNoteCard,labelKeyData) {
    const uid = localStorage.getItem('uid')
    console.log("uid----->", uid, "labelData ------->", labelKeyData)
    newPostRef.ref('/users /' + uid + '/notes/' + KeyOfNoteCard+'/noteLabel').push(labelKeyData);
    console.log("labelData entered in firebase")
}

export function deleteUserNote(key) {
    const uid = localStorage.getItem('uid')
    console.log(" key for deletion is=>>>>>",key)
    console.log(uid + ' : uid for deletion note')
    newPostRef.ref('/users /' + uid + '/notes/'+key).remove();
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
        console.log('uid from getNotes->',uid)
        console.log("get Notes",snapshot.val())
        callback(snapshot.val())
    })
}

export function getLabels(callback) {
    const uid = localStorage.getItem('uid')
    console.log('app : ' + uid);
    newPostRef.ref('/users /' + '/labels/').on('value', (snapshot) => {
        console.log('uid from getLabels->', uid)
        console.log("get Labels", snapshot.val())
        callback(snapshot.val())
    })
}

export function updateNote(key, obj){
    const uid = localStorage.getItem('uid')
    console.log(uid+"uid is")
    console.log("key is "+ key)
    console.log("Object" + JSON.stringify(obj.trashStatus))
    newPostRef.ref('/users /' + uid + '/notes/' + key).update(obj);
}

export { firebaseAuth,newPostRef }


