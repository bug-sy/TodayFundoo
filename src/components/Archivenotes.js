import { withStyles } from "@material-ui/styles";
import React from 'react';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import Typography from '@material-ui/core/Typography';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import UnarchiveOutlinedIcon from '@material-ui/icons/UnarchiveOutlined';
import PopState from './PopoverPopupState.js'

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

    iconButton: {
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

class Archnotes extends React.Component {
    render(){
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
                    }>
                        <IconButton className={classes.editIcon}><AddAlertIcon /></IconButton>
                        <IconButton className={classes.editIcon}><PersonAddOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ColorLensOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ImageOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon} onClick={() => this.props.handleArchiveStatusFalse(this.props.nkey)}><UnarchiveOutlinedIcon/></IconButton>
                        <PopState
                            handleTrashStatusChange={this.props.handleTrashStatusChange}
                            nkey={this.props.nkey}
                        />
                    </Paper>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles)(Archnotes);
