import React from 'react';
import DateTimePicker from './DateTimePicker'
import TextField from '@material-ui/core/TextField';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import '/Users/rakesh/Desktop/newsignup/src/Reminder/Reminder.css'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { getLabels, createLabelNoteInNotes } from '/Users/rakesh/Desktop/newsignup/src/firebase.js'
import '/Users/rakesh/Desktop/newsignup/src/components/AddLable/AddLabel.css'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    typography: {
        padding: theme.spacing(2),
    },
    card: {
        minWidth: 295,
        backgroundColor: "pink"

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
};

class AddLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showLabel: false,
                labelName: '',
                labels: null
            }
        this.labelRef = React.createRef();
    }

    render() {
        const { classes } = this.props;
        return (
            <div  >
                <AddAlertIcon
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => this.setState({ showLabel: !this.state.showLabel })}
                    ref={this.labelRef}
                />
                <Popover
                    variant="persistent"
                    anchor="left"
                    open={this.state.showLabel}
                    anchorEl={this.labelRef.current}
                    onClose={() => this.setState({ showLabel: !this.state.showLabel })}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <div className="addReminderContentAlignment">
                        <div className="addlabelPopOver">
                            <Typography>Later Today</Typography>
                            <Typography>8:00 PM</Typography>
                        </div>
                        <div className="addlabelPopOver">
                            <Typography onClick={() => { console.log(this.props.nkey) }}>Tomorrow</Typography>
                            <Typography>8:00 AM</Typography>
                        </div>
                        <div className="addlabelPopOver">
                            <Typography >Next Week</Typography>
                            <Typography>Mon,8:00 AM</Typography>
                        </div>
                        <div>
                        <DateTimePicker
                            nkey={this.props.nkey}
                        />
                        </div>
                  
                    </div>
                </Popover>
            </div>
        );
    }
}

export default withStyles(styles)(AddLabel)
