import { withStyles } from "@material-ui/styles";
import React from 'react';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
//import ReminderPreselection from '../Reminder/ReminderPages/ReminderPreSelection'
import { getLabels } from '../../firebase.js'
import Card from '@material-ui/core/Card';
import '../../components/AddLable/AddLabel.css'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Typography from '@material-ui/core/Typography';
import PopState from '../../components/PopoverPopupState.js'
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

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                labels: null
            }
    }

    componentDidMount() {
        getLabels((labels) => {
            this.setState({
                labels: labels
            }, () => {
                console.log("inside the list data --------> :", this.state.labels)
            })
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                    <div>

                        <Paper className={this.props.handleGridOrListWidth ? classes.shadow : classes.shadowList}>
                            <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                            }>
                                <Typography style={{ width: 280 }} {...bindTrigger(popupState)}>
                                    {this.props.notes.title}
                                </Typography>
                             
                                <Typography>
                                    {
                                        this.props.notes.pinStatus == true
                                            ?
                                            <img
                                                onClick={() => this.props.handlePinStatusChange(this.props.nkey, false)}
                                                color="primary"
                                                src={require('../../components/Asset/download.png')} style={{ height: 16, width: 16 }}
                                            />
                                            :
                                            <IconButton
                                                onClick={() => this.props.handlePinStatusChange(this.props.nkey, true)}
                                                color="primary"
                                                className={classes.editIcon}
                                                style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==')", marginLeft: 16 }}
                                            >
                                            </IconButton>
                                    }
                                </Typography>
                            </Paper>
                            <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                            }>
                                <Typography {...bindTrigger(popupState)}
                                    style={{ width: 300 }}>{this.props.notes.note}
                                </Typography>
                            </Paper>
                            <Paper className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                            }>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {this.props.notes.reminder == null
                                        ?
                                        ""
                                        :
                                        <Card style={{ display: "flex", flexDirection: "row", width: 170, justifyContent: "space-between" }} >

                                            <AccessTimeOutlinedIcon style={{ fontSize: "medium" }} />

                                            {this.props.notes.reminder}
                                        </Card>

                                    }

                                </div>
                            </Paper>
                            <Paper className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                            }>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {this.props.notes.noteLabel == null
                                        ?
                                        ""
                                        :
                                        Object.getOwnPropertyNames(this.props.notes.noteLabel).map((key) => (

                                            <Card className="noOfLabels">{this.props.notes.noteLabel[key].labelName}</Card>
                                        ))}
                                </div>

                            </Paper>

                            <Paper component="form" className={this.props.handleGridOrListWidth ? classes.root : classes.rootList
                            }>
                                
                                <IconButton className={classes.editIcon}><PersonAddOutlinedIcon /></IconButton>
                                <IconButton className={classes.editIcon}><ColorLensOutlinedIcon /></IconButton>
                                <IconButton className={classes.editIcon}><ImageOutlinedIcon /></IconButton>
                                <IconButton className={classes.editIcon} onClick={() => this.props.handleArchiveStatusChange(this.props.nkey)}><ArchiveOutlinedIcon /></IconButton>
                                <PopState
                                    handleTrashStatusChange={this.props.handleTrashStatusChange}
                                    nkey={this.props.nkey}
                                />
                            </Paper>
                        </Paper>
                        <Dialog
                            {...bindPopover(popupState)}
                        >
                            <DialogueNote text={'I am the console text'} />
                        </Dialog>
                    </div>
                )}
            </PopupState>
        )
    }
}

export default withStyles(styles)(List);
