import { withStyles } from "@material-ui/styles";
import React from 'react';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Dialog from '@material-ui/core/Dialog';
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import Typography from '@material-ui/core/Typography';
import PopState from '/Users/rakesh/Desktop/newsignup/src/components/PopoverPopupState.js'
import { pink } from "@material-ui/core/colors";
import DialogueNote from '/Users/rakesh/Desktop/newsignup/src/components/standalone/Dialog.js'



const theme = createMuiTheme({
    spacing : 4
});

const styles = {
    root : {
        padding : '4px 4px',
        display : 'flex',
        alignItems : 'center',
        width : 310,        
        boxShadow : 800,
        borderRadius : 0,      
        backgroundColor : 'cyan',
        
    },

    shadow : {
        backgroundColor: 'pink',
        width:310,
        border : 8,
        //marginLeft :120,
        marginBottom : 10,
        marginRight: 10,
    },

    takeNote : {
        padding : '2px 4px',
        display : 'flex',
        alignItems : 'center',
        width : 400,
        marginTop : 0,
        boxShadow : 'None',
        borderRadius : 0,
        wordBreak: 'break-all'
    },

    input : {
        marginLeft : theme.spacing(1),
        flex : 1,
        wordBreak: 'break-all'
    },

    iconButton : {
        padding : 10,
        backgroundColor : 'pink',
        marginLeft:50
    },

    divider : {
        height : 28,
        margin : 4,
    },

    editIcon : {
        color : 'inherit',

    }
};



class List extends React.Component {
    render() {
        const { classes } = this.props;
        
        return (
            <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
            <div>
                       
                <Paper className={classes.shadow}  >
                    <Paper component="form" className={classes.root}>
                                <Typography style={{ width: 280,backgroundColor:"red" }} {...bindTrigger(popupState)}>
                        {this.props.notes.title}
                        </Typography >
                        <Typography>
                        {
                            this.props.notes.pinStatus == true 
                            ? 
                            
                                <img 
                                    onClick={() => this.props.handlePinStatusChange(this.props.nkey, false)}
                                    color="primary"
                                    style={{ backgroundColor: 'lime' }}
                                    src={require('/Users/rakesh/Desktop/newsignup/src/components/Asset/download.png')} style={{height:16,width:16}} 
                                />
                        
                        :
                            <IconButton
                                onClick={() => this.props.handlePinStatusChange(this.props.nkey,true)}
                                color="primary"
                                className={classes.editIcon}
                                style={{ backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==')", marginLeft: 16 }}
                            >
                          
                            </IconButton>

                        }
                                </Typography>
                    </Paper>
                    <Paper component="form" className={classes.root}>
                                <Typography {...bindTrigger(popupState)}                                                  
                                    style={{ width: 300 }}>{this.props.notes.note}
                        </Typography>
                    </Paper>
                    <Paper component="form" className={classes.root}>
                        <IconButton className={classes.editIcon} ><AddAlertIcon /></IconButton>
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

                            <DialogueNote text={'I am the console text'}/>



                        </Dialog>
            </div>
                )}
            </PopupState>
        )
    }
}

export default withStyles(styles)(List);
