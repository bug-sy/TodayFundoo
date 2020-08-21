import React from 'react';
import ClickAwayforNotes from '../clickAwayforNotes'
import { toggleGridorList } from '../UsingRedux'
import Board from '../Board'
import { connect } from 'react-redux'
import { newPostRef } from '../../firebase.js'
import List from '../../components/List.js'
import data from '../../../src/sampleData.js'
import { createUserNote, getNotes, updateNote } from '../../firebase.js'
import { Typography } from '@material-ui/core';


class NoteInputandOutput extends React.Component {
    state = {
        boards: [],
        notes: null,
        archiveStatus: false,
        pinStatus: false,
        trashStatus: false,
        title:'',
        note:'',
    }

    handleTrashStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.trashStatus = true;
        updateNote(noteId, obj)
    }

    handlePinStatusTrue = (noteId,TorF) => {
        let obj = this.getNodeObj();
        obj.pinStatus = TorF;
        updateNote(noteId, obj)
    }

    handleArchiveStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.archiveStatus = true;
        updateNote(noteId, obj)
    }

     handleTitleAndNoteUpdate = (titleAndNote,noteId) => {
    //     //console.log(",the title,the note,the key------->",titleAndNote.title,titleAndNote.note,noteId)
         let titleAndNoteObj = this.getTitleAndNoteObj();
         titleAndNoteObj.title = titleAndNote.title;
         titleAndNoteObj.note =titleAndNote.note;
         updateNote(noteId, titleAndNoteObj)  
     }

    getTitleAndNoteObj = () => {
        var titleAndNoteObj = {
            title:this.state.notes.title,
            note:this.state.notes.note,
        }
        return titleAndNoteObj;
    } 


    getNodeObj = () => {
        var nodeObj = {
            //title:this.state.notes.title,
            //note:this.state.notes.note,
            pinStatus: this.state.pinStatus,
            archiveStatus: this.state.archiveStatus,
            trashStatus: this.state.trashStatus
        }
        return nodeObj;
    } 
    
    componentDidMount(){
        getNotes((notes) => {
            this.setState({
                notes: notes
            },() => {
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
    console.log("Dashboardprops_in_parsing  = ", this.props)
    return(
        <div>
            <ClickAwayforNotes 
                boards={this.state.boards}
                createNewBoard={this.createNewBoard}
            />  
            <Typography style={{ marginLeft: 300, maxWidth: '60%', }}>Pinned</Typography>
            <div
                style={{
                    display: 'flex',
                    alignItems: this.props.gridOrList == true ? '' : 'center',
                    maxWidth: '60%',
                    marginLeft:300,
                    flexDirection: this.props.gridOrList == true ? 'row' : 'column',
                    flexWrap: 'wrap',
                }}  
            >
                {       this.state.notes !== null &&
                        Object.getOwnPropertyNames(this.state.notes).map((key) => (
                        this.state.notes[key].archiveStatus === false &&
                        this.state.notes[key].trashStatus === false &&
                        this.state.notes[key].pinStatus === true &&
                        <List
                            notes={this.state.notes[key]}
                            nkey={key}
                            handleArchiveStatusChange={this.handleArchiveStatusTrue}
                            handleTrashStatusChange={this.handleTrashStatusTrue} 
                            handlePinStatusChange={this.handlePinStatusTrue} 
                            handleTitleAndNoteUpdate={this.handleTitleAndNoteUpdate} 
                            handleGridOrListWidth={this.props.gridOrList}                  
                        />
                    ))}            
            </div>

            <Typography style={{ marginLeft: 300,  maxWidth: '60%', marginTop: 10,}}>Others</Typography>
            <div 
                style={{
                    display: 'flex',
                    maxWidth: '60%',
                    marginLeft: 300,
                    alignItems: this.props.gridOrList == true ? '' : 'center',
                    flexDirection: this.props.gridOrList == true ? 'row' : 'column',
                    flexWrap: 'wrap',
                }}
            >
          
           {        this.state.notes !== null && 
                    Object.getOwnPropertyNames(this.state.notes).map((key) => (
                    this.state.notes[key].archiveStatus === false &&
                    this.state.notes[key].trashStatus === false &&
                    this.state.notes[key].pinStatus === false &&

                <List 
                    notes={this.state.notes[key]}
                    nkey={key}
                    handleArchiveStatusChange={this.handleArchiveStatusTrue}
                    handleTrashStatusChange={this.handleTrashStatusTrue}
                    handlePinStatusChange={this.handlePinStatusTrue}
                    handleTitleAndNoteUpdate={this.handleTitleAndNoteUpdate}
                    handleGridOrListWidth={this.props.gridOrList} 
                />
            ))}
            </div>
        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        gridOrList: state.gridOrList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleGridorList: () => dispatch(toggleGridorList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteInputandOutput)


