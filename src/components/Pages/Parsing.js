import React from 'react';
import Dashboard from '/Users/rakesh/Desktop/newsignup/src/components/clickAwayforNotes.js'
import Board from '../Board'
import { newPostRef } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import List from '/Users/rakesh/Desktop/newsignup/src/components/List.js'
import data from '/Users/rakesh/Desktop/newsignup/src/sampleData.js'
import { createUserNote, getNotes, updateNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'


class NoteInputandOutput extends React.Component {

    state = {
        boards: [],
        notes: null,
        archiveStatus: false,
        pinStatus: false,
        trashStatus: false,
    }


    handleTrashStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.trashStatus = true;
        updateNote(noteId, obj)
    }

    handleArchiveStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.archiveStatus = true;
        updateNote(noteId, obj)
    }

    getNodeObj = () => {
        var nodeObj = {
            pinStatus: this.state.pinStatus,
            archiveStatus: this.state.archiveStatus,
            trashStatus: this.state.trashStatus
        }
        return nodeObj;
    } 
    
    componentDidMount() {
        getNotes((notes) => {
            this.setState({
                notes: notes
            }, () => {
                console.log("state notes :", this.state.notes)
            })
        })
    }
        

    

    createNewBoard = async (board) => {
        try {

            const uid = localStorage.getItem('uid')
            console.log('app : ' + uid);
            newPostRef.ref('/users /' + uid + '/notes/').push(board)
         
            this.setState({ boards: [...this.state.boards, board] })
        }
        catch (error) {
            console.error('Error creating new board: ', error)
        }
    }

render(){
    return(
        <div>
            <Dashboard
             
                boards={this.state.boards}
                createNewBoard={this.createNewBoard}
            />
           {this.state.notes !== null && 
                     Object.getOwnPropertyNames(this.state.notes).map((key,index) => (
                         this.state.notes[key].archiveStatus === false &&
                         this.state.notes[key].trashStatus === false &&
                <List 
                    notes={this.state.notes[key]}
                    nkey={key}
                    handleArchiveStatusChange={this.handleArchiveStatusTrue}
                    handleTrashStatusChange={this.handleTrashStatusTrue}
                />
            ))}
           

        </div>
    )
}



}

export default NoteInputandOutput


