import { withStyles } from "@material-ui/styles";
import React from 'react';
import '../AddLable/AddLabel.css'
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import PopState from '../../components/PopoverPopupState.js'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import DialogueNote from '../../components/standalone/Dialog.js'

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
        backgroundColor: 'cyan',

    },

    rootdialogue: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(20),
            height: theme.spacing(16),
        },
    },

    shadow: {
        backgroundColor: 'pink',
        width: 310,
        border: 8,
        //marginLeft :120,
        marginBottom: 10,
        marginRight: 10,
    },

    takeNote: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        marginTop: 0,
        boxShadow: 'None',
        borderRadius: 0,
        wordBreak: 'break-all'
    },

    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
        wordBreak: 'break-all'
    },

    iconButton: {
        padding: 10,
        backgroundColor: 'pink',
        marginLeft: 50
    },

    divider: {
        height: 28,
        margin: 4,
    },

    editIcon: {
        color: 'inherit',

    }
};



class DialogueList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
           
            <div>
                        <Paper className={classes.shadow}>
                    <Paper component="form" className={classes.root}>
                                <Typography style={{ width: 260 }} >
                            I am the title
                        </Typography>
                                <IconButton
                                    
                                    color="primary"
                                    className={classes.editIcon}
                                    style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==')", marginLeft: 16 }}
                                >

                                </IconButton>
                       

                    </Paper>
                    <Paper component="form" className="noOfLabels" >
                        <div className="noOfLabels">
                        <Card>
                        I am the
                        </Card>
                        </div>
                        <div className="noOfLabels">
                        <Card>
                            I am the
                        </Card>
                        </div>
                        <div className="noOfLabels">
                            I am the
                        </div>
                        <div className="noOfLabels">
                            I am the
                        </div>
                        <div className="noOfLabels">
                            I am the
                        </div>
                        <div className="noOfLabels">
                            I am the
                        </div>
                        <div className="noOfLabels">
                            I am the
                        </div>
                    </Paper>
                    <Paper component="form" className={classes.root} >
                        <Typography>
                            I am the note
                        </Typography>
                    </Paper>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.editIcon} ><AddAlertIcon /></IconButton>
                        <IconButton className={classes.editIcon}><PersonAddOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ColorLensOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon}><ImageOutlinedIcon /></IconButton>
                        <IconButton className={classes.editIcon} onClick={()=>console.log('hi')}><ArchiveOutlinedIcon /></IconButton>
                       
                    </Paper>
                </Paper>
    
            </div>

        )
    }
}

export default withStyles(styles)(DialogueList);
