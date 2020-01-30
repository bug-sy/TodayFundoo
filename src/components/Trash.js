import React, { Component } from 'react'
import TrashNotes from '/Users/rakesh/Desktop/newsignup/src/components/TrashNote.js'
import { getNotes, updateNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'

class Archive extends Component {
    constructor(props) {
        super(props)
        this.state = {
            notes : null,
            archiveStatus : false,
            pinStatus : false,
            trashStatus : false,
        }
    }

    handleTrashStatusFalse = (noteId) => {
        let obj = this.getNodeObj();
        obj.trashStatus = false;
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

    componentDidMount() {
        getNotes((notes) => {
            this.setState({
                notes : notes
            },() => {
                console.log("state notes :", this.state.notes)
            })
        })
    }

    render() {
        return (
            <div
                style={{
                    backgroundColor: 'orange',
                    display: 'flex',
                    width: '80%',
                    maxWidth: '60%',
                    marginLeft: 180,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginTop: 100,
                    marginLeft: 300,

                }}
            >
                {
                    this.state.notes !== null &&
                    Object.getOwnPropertyNames(this.state.notes).map((key) => (
                    this.state.notes[key].archiveStatus === false &&
                    this.state.notes[key].trashStatus === true &&
                        <TrashNotes
                            notes = {this.state.notes[key]}
                            nkey = {key}
                            handleTrashStatusChange = {this.handleTrashStatusFalse}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Archive