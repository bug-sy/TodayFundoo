import { withStyles } from "@material-ui/styles";
import React from 'react';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import RestoreFromTrashIcon from '@material-ui/icons/RestoreFromTrash';
import {deleteUserNote} from '../firebase'

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 310,
        boxShadow: 800,
        borderRadius: 0,
    },
    rootList: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 510,
        boxShadow: 800,
        borderRadius: 0,
    },

    shadow: {
        width: 310,
        border: 8,
        marginBottom: 10,
        marginRight: 10,
    },

    shadowList: {
        width: 510,
        border: 8,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: "pink"

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
                <Paper className={this.props.handleGridOrListWidth ? classes.shadow : classes.shadowList}>
                    <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                    }>
                        <Typography style={{ width: 260 }}>
                            {this.props.notes.title}
                        </Typography>
                       
                    </Paper>
                    <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                    }>
                        <Typography
                        >{this.props.notes.note}
                        </Typography>
                    </Paper>
                    <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                    } >
                        <IconButton className={classes.editIcon} onClick={() => deleteUserNote(this.props.nkey)}><DeleteOutlineOutlinedIcon/></IconButton>
                        <IconButton className={classes.editIcon} onClick={() => this.props.handleTrashStatusChange(this.props.nkey)}><RestoreFromTrashIcon/></IconButton>
                       
                    </Paper>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(TrashNotes);
