import React , {Component} from 'react'
import {ReactDom} from 'react-dom'
import {Button} from '@material-ui/core'
import ArchiveNotes from '/Users/rakesh/Desktop/newsignup/src/components/Archivenotes.js'
import { createUserNote,getNotes,updateNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import Parsing from '/Users/rakesh/Desktop/newsignup/src/components/Pages/Parsing.js'
import { render } from '@testing-library/react'

class Archive extends Component{
    constructor(props){
        super(props)
        this.state ={
            notes :null,
            archiveStatus:false,
            pinStatus:false,
            trashStatus:false,
        }
    }

    handleArchiveStatusFalse = (noteId) => {
        let obj = this.getNodeObj();
        obj.archiveStatus = false;
        updateNote(noteId , obj)
    }

    handleTrashStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.trashStatus = true;
        updateNote(noteId, obj)
    }

    getNodeObj = () => {
        var nodeObj = {
            pinStatus : this.state.pinStatus,
            archiveStatus : this.state.archiveStatus,
            trashStatus : this.state.trashStatus
        }
        return nodeObj;
    }

    componentDidMount(){
        getNotes((notes)=>{
            this.setState({
                notes:notes
            },()=>{console.log("state notes :",this.state.notes)
            })
        })
    }

    render() {
        return(
            <div>
                {
                    this.state.notes !== null && 
                    Object.getOwnPropertyNames(this.state.notes).map((key) => (
                this.state.notes[key].archiveStatus === true &&
                this.state.notes[key].trashStatus === false &&
                        <ArchiveNotes
                        notes = {this.state.notes[key]}
                        nkey = {key}
                        handleArchiveStatusFalse = {this.handleArchiveStatusFalse}
                        handlePinStatusChange={this.handlePinStatus}
                        handleTrashStatusChange = { this.handleTrashStatusTrue}                    
                    />
                    ))
            }
            </div>
        )
    }




}

export default Archive