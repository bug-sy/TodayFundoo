import 'date-fns';
import moment from "moment";
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import MomentUtils from "@date-io/moment";
import LuxonUtils from '@date-io/luxon'
import DateFnsUtils from '@date-io/date-fns';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { createReminderInNote } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'

export default class NoteInputandOutput extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                selectedDate: new Date(),
                showEntryDateTime: false,
            }
        this.DateTimeRef = React.createRef();
    }

    render() {
        return (
           
            <div>
            <div style={{display:'flex',
                        flexDirection:'row',
                        justifyContent:'flex-start'
                        }}>
                {console.log("inside date time picker------->",this.state.selectedDate)}
                {console.log("inside date time picker------>",Date.now())}
                <AccessTimeIcon />
                    <div style={{width:160,display:'flex',justifyContent:"flex-end",flexDirection:"row"}}>
                <Typography
                    style={{ width: 150 }}
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => this.setState({ showEntryDateTime: !this.state.showEntryDateTime })}
                    ref={this.DateTimeRef}>
                    Pick Date Time
                </Typography>
                    </div>
                </div>

                <Popover
                    variant="persistent"
                    anchor="left"
                    open={this.state.showEntryDateTime}
                    anchorEl={this.DateTimeRef.current}
                    onClose={() => this.setState({ showEntryDateTime: !this.state.showEntryDateTime })}
                >
                    <Card style={{
                        height: '25%',
                        width:'100%'  
                    }} >
                        <MuiPickersUtilsProvider utils={MomentUtils} libInstance={moment} >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexWrap: 'wrap',
                                alignItems:'center',
                                width:'100%',
                                padding:8}}>
                                <KeyboardDatePicker
                                    clearable
                                    disableToolbar
                                    variant="inline"
                                    autoOk
                                    // format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Date picker"
                                    value={this.state.selectedDate}
                                    onChange={selectedDate => this.setState({ selectedDate: selectedDate })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />

                                <KeyboardTimePicker
                                    disableToolbar
                                    clearable
                                    margin="normal"
                                    ampm={false}
                                    id="time-picker"
                                    label="Time picker"
                                    value={this.state.selectedDate}
                                    onChange={selectedDate => this.setState({ selectedDate: selectedDate })}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change time',
                                    }}
                                />
                            
                                <Typography style={{ dense: true }} onClick={() => createReminderInNote(this.props.nkey, { dateTimeReminder: this.state.selectedDate}) }>
                                  Save
                                </Typography>

                                </div>
                        </MuiPickersUtilsProvider>
                    </Card>
                </Popover>
            </div>
            );
        }
    }
