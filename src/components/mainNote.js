import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import VertDot from './PopoverPopupState'
import Badge from '@material-ui/core/Badge';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '4px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginTop: 30,
        boxShadow: 'None',
        borderRadius: 0,

    },

    shadow: {
        width: 420,
        border: 8,

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
}));



export default function CustomizedInputBase() {
    const classes = useStyles();

    const createNewList = (e) => {


    }


    return (
        <div>
            <ClickAwayListener onClickAway={() => createNewList()}>
                <Paper className={classes.shadow}>

                    <Paper component="form" className={classes.root}  >

                        <InputBase
                            className={classes.input}
                            placeholder="Title"
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />

                        <IconButton color="primary" className={classes.iconButton} style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==')", marginLeft: 16 }}>

                        </IconButton>
                    </Paper>
                    <Paper component="form" className={classes.takeNote}>
                        <InputBase
                            className={classes.input}
                            placeholder="Take a note...."
                            inputProps={{ 'aria-label': 'search google maps' }}
                        />
                    </Paper>
                    <Paper component="form" className={classes.takeNote} >
                        <IconButton className={classes.editIcon}><AddAlertIcon /></IconButton>
                        <IconButton className={classes.editIcon}><PersonAddOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ColorLensOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ImageOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon} onClick={() => createNewList()}><ArchiveOutlinedIcon /></IconButton>
                        <VertDot />

                    </Paper>
                </Paper>
            </ClickAwayListener>
        </div>

    );
}
