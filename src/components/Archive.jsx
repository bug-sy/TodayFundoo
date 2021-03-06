import React , {Component} from 'react'
import ArchiveNotes from './Archivenotes.js'
import { getNotes,updateNote } from '../../src/firebase.js'
import { connect } from 'react-redux'
import { toggleGridorList } from './UsingRedux'

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

    render(){
        console.log("Dashboardprops_in_Archive  = ", this.props)
        return(
            <div
                style={{
                    display: 'flex',
                    alignItems: this.props.gridOrList == true ? '' : 'center',
                    maxWidth: '60%',
                    marginLeft: 300,
                    flexDirection: this.props.gridOrList == true ? 'row' : 'column',
                    flexWrap: 'wrap',
                    backgroundColor:'green',
                    marginTop:200   
                }}
                
            >
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
                    handleGridOrListWidth={this.props.gridOrList}                  
                    />
                ))
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(Archive)