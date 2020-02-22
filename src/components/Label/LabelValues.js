import React from 'react';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { createLabelNote, getLabels } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Card from '@material-ui/core/Card';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import '/Users/rakesh/Desktop/newsignup/src/components/AddLable/AddLabel.css'

export default class LabelValues extends React.Component {
    render(){
        return(
            <div className="addlabelPopOver">
            
          
                <DeleteOutlineOutlinedIcon onClick={() => console.log('delete')} />
                <TextField
                    placeholder="Create New Label"
                    defaultValue={this.props.labels.labelName}
                />
                <EditOutlinedIcon />
              
            </div>

        )
    }
}