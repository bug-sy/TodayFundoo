import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import {withStyles} from "@material-ui/styles";

const theme = createMuiTheme({
    spacing : 4
});

const styles = {
    root : {
        padding : '4px 4px',
        display : 'flex',
        alignItems : 'center',
        width : 400,
        marginTop : 30,
        boxShadow : 'None',
        borderRadius : 0,
    },

    shadow : {
        width : 420,
        border : 8,
    },

    takeNote : {
        padding : '2px 4px',
        display : 'flex',
        alignItems : 'center',
        width : 400,
        marginTop : 0,
        boxShadow : 'None',
        borderRadius : 0
    },

    input : {
        marginLeft : theme.spacing(1),
        flex : 1,
    },

    iconButton : {
        padding : 10,
    },

    divider : {
        height : 28,
        margin : 4,
    },

    editIcon : {
        color : 'inherit',
    }
};

class Board extends React.Component {
    state = {
        title: '',
        note: '#',
        archiveStatus:false,
        pinStatus: false,
        trashStatus: false,
    }

    addTitleBoardInput = React.createRef()
    addContentBoardInput = React.createRef()
    
    createNewList = (e) => {
        e.preventDefault()
        const board = {           
            title: this.addTitleBoardInput.current.value,
            note: this.addContentBoardInput.current.value,
            createdAt: new Date(),
            archiveStatus: this.state.archiveStatus,
            pinStatus: this.state.pinStatus,
            trashStatus: this.state.trashStatus,
        }
        if (board.title) {
            this.props.createNewBoard(board)
        }
        this.addTitleBoardInput.current.value = ''
        this.addContentBoardInput.current.value = ''
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <ClickAwayListener onClickAway={this.createNewList} >
                    <Paper className={classes.shadow}>
                        <Paper component="form" className={classes.root}>
                            <InputBase
                                inputRef={this.addTitleBoardInput}
                                className={classes.input}
                                placeholder="Title"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton color="primary" className={classes.iconButton}
                                style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==')", marginLeft: 16 }}>
                            </IconButton>
                        </Paper>
                        <Paper component="form" className={classes.takeNote}>
                            <InputBase
                                inputRef={this.addContentBoardInput}
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
                            <IconButton className={classes.editIcon}><ArchiveOutlinedIcon /></IconButton>
                        </Paper>
                    </Paper>
                </ClickAwayListener>
            </div>
        );
    }
}

export default withStyles(styles)(Board);