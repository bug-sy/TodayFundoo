import React from 'react';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import StandaloneList from '/Users/rakesh/Desktop/newsignup/src/components/standalone/Dialog.js'


const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(20),
            height: theme.spacing(16),
        },
    },
};



class PopState extends React.Component {
   

    render() {
        const classes = this.props;
        return (

            <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                    <div>
                        <Button variant="contained" color="inherit" {...bindTrigger(popupState)}>
                            ghjkl
                        </Button>
                        <Dialog

                            {...bindPopover(popupState)}

                        >
                         
                            <StandaloneList/>



                        </Dialog>
                    </div>
                )}
            </PopupState>
        );
    }

}


export default withStyles(styles)(PopState);
