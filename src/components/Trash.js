import React, { Component } from 'react'
import { ReactDom } from 'react-dom'
import { Button } from '@material-ui/core'
import TrashNotes from '/Users/rakesh/Desktop/newsignup/src/components/TrashNote.js'
import { createUserNote, getNotes, updateNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import Parsing from '/Users/rakesh/Desktop/newsignup/src/components/Pages/Parsing.js'
import { render } from '@testing-library/react'

class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: null,
            archiveStatus: false,
            pinStatus: false,
            trashStatus: false,
        }
    }


    handleTrashStatusTrue = (noteId) => {
        let obj = this.getNodeObj();
        obj.trashStatus = false;
        updateNote(noteId, obj)
    }

    getNodeObj = () => {
        var nodeObj = {
            pinStatus: this.state.pinStatus,
            rchiveStatus: this.state.archiveStatus,
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

    render() {
        return (
            <div>
                {
                    this.state.notes !== null &&
                    Object.getOwnPropertyNames(this.state.notes).map((key) => (
                        this.state.notes[key].archiveStatus === false &&
                        this.state.notes[key].trashStatus === true &&
                        <TrashNotes
                            notes={this.state.notes[key]}
                            nkey={key}
                            handleTrashStatusChange={this.handleTrashStatusTrue}
                        />
                    ))
                }
            </div>
        )
    }




}

export default Archive