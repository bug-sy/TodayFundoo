import { withStyles } from "@material-ui/styles";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Vertdot from '/Users/rakesh/Desktop/newsignup/src/components/PopoverPopupState.js'
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 310,
        boxShadow: 'None',
        borderRadius: 0,

    },

    shadow: {
        width: 310,
        border: 8,
        marginLeft:8,
        marginTop:8

    },

    takeNote: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginTop: 0,
        boxShadow: 'None',
        borderRadius: 0
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },

    iconButton: {
        padding: 10,
    },

    divider: {
        height: 28,
        margin: 4,
    },

    editIcon: {
        color: 'inherit',
    }
};

class TrashNotes extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div >
                <Paper className={classes.shadow}>
                    <Paper component="form" className={classes.root}>
                        <Typography style={{ width: 260 }}>
                            {this.props.notes.title}
                        </Typography>
                       
                    </Paper>
                    <Paper component="form" className={classes.root}>
                        <Typography
                        >{this.props.notes.note}
                        </Typography>
                    </Paper>
                    <Paper component="form" className={classes.root} >
                        <IconButton className={classes.editIcon}><AddAlertIcon /></IconButton>
                        <IconButton className={classes.editIcon}><PersonAddOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ColorLensOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ImageOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon} onClick={() => this.props.handleTrashStatusChange(this.props.nkey)}><RestoreFromTrashIcon/></IconButton>
                       
                    </Paper>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(TrashNotes);
