import React from 'react';
import DisplayReminder from './DisplayingReminderCard'
import { newPostRef } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import List from '/Users/rakesh/Desktop/newsignup/src/components/List.js'
import data from '/Users/rakesh/Desktop/newsignup/src/sampleData.js'
import { createUserNote, getNotes, updateNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux'
import { toggleGridorList } from '../../components/UsingRedux'


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

    handlePinStatusTrue = (noteId, TorF) => {
        let obj = this.getNodeObj();
        obj.pinStatus = TorF;
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

  

    render() {
        console.log("Dashboardprops_in_Reminder  = ", this.props)
        return (
            <div>
             
                <Typography style={{ marginLeft: 300, maxWidth: '60%', }}>Pinned</Typography>
                <div
                    style={{
                    display: 'flex',
                    alignItems: this.props.gridOrList == true ? '' : 'center',
                    maxWidth: '60%',
                    marginLeft: 300,
                    flexDirection: this.props.gridOrList == true ? 'row' : 'column',
                    flexWrap: 'wrap',
                    backgroundColor: 'green',
                    marginTop: 200 
                    }}
                >
                    {this.state.notes !== null &&
                        this.state.reminder !== null &&
                        Object.getOwnPropertyNames(this.state.notes).map((key) => (
                            this.state.notes[key].archiveStatus === false &&
                            this.state.notes[key].trashStatus === false &&
                            <DisplayReminder
                                notes={this.state.notes[key]}
                                nkey={key}
                                handleArchiveStatusChange={this.handleArchiveStatusTrue}
                                handleTrashStatusChange={this.handleTrashStatusTrue}
                                handlePinStatusChange={this.handlePinStatusTrue}
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


