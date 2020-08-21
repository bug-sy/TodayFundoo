import React from 'react';
import Typography from '@material-ui/core/Typography';
import ForLableMapping from './LabelIdMatching'
import { createUserNote, getNotes, updateNote } from '../../firebase.js'

export default class LabelMapping extends React.Component {
    state = {
        boards: [],
        notes: null,
        archiveStatus: false,
        pinStatus: false,
        trashStatus: false,
    }

    componentDidMount() {
        getNotes((notes) => {
            this.setState({
                notes: notes
            }, () => {
                console.log("----> inside the label mapping -----> :", this.state.notes)
            })
        })
    }

    render(){
        return(
            <div
                className="mappingLabelId"
                 style={{
                //     display: 'flex',
                //     maxWidth: '60%',
                 //    marginTop: 300,
                //     flexWrap: 'wrap'
                 }} 
                >
                {this.state.notes !== null &&
                    Object.getOwnPropertyNames(this.state.notes).map((key) => (
                        <div>
                     {
                         this.state.notes[key].noteLabel!==undefined &&
                         Object.getOwnPropertyNames(this.state.notes[key].noteLabel).map((keyLabel)=>(
                        this.state.notes[key].noteLabel[keyLabel].labelName == this.props.location.state.title&&
                             <ForLableMapping  style={{marginTop:100}}
                                title = {this.state.notes[key].title}
                                note = {this.state.notes[key].note}
                                labelName={this.state.notes[key].noteLabel[keyLabel].labelName}
                                labelParsing={this.state.notes[key].noteLabel}
                                />
                           

                           
                         ))
                         
                            
                      
                     }
                     </div>
                      
                    ))} 
             
         
            </div>
        )
    }
}
