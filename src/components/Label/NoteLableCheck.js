import React from 'react';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';
import TextField from '@material-ui/core/TextField';
import { createLabelNoteInNotes, deleteLabelNoteInNotes } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import '/Users/rakesh/Desktop/newsignup/src/components/AddLable/AddLabel.css'
import CheckBoxOutlinedIcon from '@material-ui/icons/CheckBoxOutlined';

export default class LabelValues extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                labelChecked: false
            }
    }

    deleteNewLabel =  (labelNameToBeDeleted) => {
        // if( this.props.notes.noteLabel !== undefined )
        //     {
                
             Object.getOwnPropertyNames(this.props.notes.noteLabel).map((keyOfLabel) => (
                
                     this.props.notes.noteLabel[keyOfLabel].labelName == labelNameToBeDeleted
                     ?
                     deleteLabelNoteInNotes(this.props.nKeyOfNoteCard, keyOfLabel)  
                     :
                     null  
             ))
            
        // }
  
    }



   createNewLabel = () => {
        const noteLabel = {
            labelId: this.props.nkey,
            labelName: this.props.labels.labelName
        }
        if (noteLabel.labelName) {
            createLabelNoteInNotes(this.props.nKeyOfNoteCard, noteLabel)
        }
        console.log("----->", this.state.labelChecked)
    }

    render() {
        return (
            <div className="addlabelPopOver">
            {
                this.state.labelChecked 
                ?
                        <CheckBoxOutlinedIcon onClick={() => {
                            this.setState({ labelChecked: !this.state.labelChecked });
                            this.deleteNewLabel(this.props.labels.labelName)
                        }} />
           
                :
                    
                        <CheckBoxOutlineBlankOutlinedIcon onClick={() => {
                            this.setState({ labelChecked: !this.state.labelChecked });
                            this.createNewLabel()
                        }} />
            }
                <TextField
                    placeholder="Create New Label"
                    defaultValue={this.props.labels.labelName}
                />
            </div>

        )
    }
}