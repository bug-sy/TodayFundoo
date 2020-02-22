import React from 'react';
import LabelValues from './LabelValues'
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import { createLabelNote,getLabels } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import Dialog from '@material-ui/core/Dialog';
import LabelTags from './LabelTags'
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import Typography from '@material-ui/core/Typography';
import '/Users/rakesh/Desktop/newsignup/src/components/AddLable/AddLabel.css'

export default class AlertDialog extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showDialog: false,
                dialoganchorEl: 'Notes',
                labelName:'',
                labels:null
            }
        this.dialogRef = React.createRef();
        this.addLabelInput = React.createRef()
    }

    componentDidMount() {
        getLabels((labels) => {
            this.setState({
                labels: labels
            }, () => {
                console.log("labels are --------> :", this.state.labels)
            })
        })
    }

    render(){
    return (
        <div>
            <div className="LabelDrawerAlignment">
            <Typography 
                style={{width: 150}}
                color="inherit"
                aria-label="open drawer"
                onClick={() => this.setState({ showDialog: !this.state.showDialog })}
                ref={this.dialogRef}>
                Edit Labels
            </Typography>  
            </div>

            <Dialog
                variant="persistent"
                anchor="left"
                open={this.state.showDialog}
                anchorEl={this.dialogRef.current}
                onBackdropClick={() => this.setState({ showDialog: !this.state.showDialog })}
            >
                <div className="addLabeContentAlignment">
                <div className="addlabelPopOver"> 
                <Typography style={{dense:true}}>Edit Labels</Typography>
                </div>
                <Divider/>
                <div className="addlabelPopOver">
                    <CloseOutlinedIcon style={{backgroundColor:"pink"}} onClick={() => console.log('delete')}/>
                        <TextField
                        inputRef={this.addLabelInput}
                        placeholder="Create New Label"
                    />
                    <CheckOutlinedIcon onClick={() => createLabelNote({labelName:this.addLabelInput.current.value})}/>
                    <Divider/>
                </div>
                    <Divider/>
                    <div className="labelValues">
                        {this.state.labels !== null &&
                            Object.getOwnPropertyNames(this.state.labels).map((key) => (
                                console.log("labels....",this.state.labels),
                                <LabelValues
                                    labels={this.state.labels[key]}
                                    nkey={key}
                                />
                            ))} 
                    </div>
                </div>
            </Dialog>
        </div>
    );
}
}
