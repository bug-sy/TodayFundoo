import React from 'react';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Popover from '@material-ui/core/Popover';



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


const StyledMenuItem = withStyles(
    {
        root: {
            '&:focus': {

                '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: 'inherit',
                },
            },
        },
    }

)(MenuItem);

class PopState extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showLeft: false,
                coloranchorEl: 'Notes'
            }
        this.drawerRef = React.createRef();
    }

    render() {
        const classes = this.props;





        return (

            <PopupState variant="popover" popupId="demo-popup-popover">
                {popupState => (
                    <div>
                        <IconButton variant="contained" color="inherit" {...bindTrigger(popupState)}>
                            <MoreVertIcon />
                        </IconButton>
                        <Popover
                            {...bindPopover(popupState)}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >
                            <div className={classes.root}>
                                <Paper elevation={0} >
                                    <StyledMenuItem>
                                        <ListItemText onClick={() => this.props.handleTrashStatusChange(this.props.nkey)} primary="Delete Note" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemText style={{ fontSize: 8 }} primary="Add Label" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemText primary="Add Drawing" onClick='handleClick' />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemText primary="Make a copy" />
                                    </StyledMenuItem>
                                    <StyledMenuItem>
                                        <ListItemText primary="show checkboxes" />
                                    </StyledMenuItem>



                                </Paper>

                            </div>




                        </Popover>
                    </div>
                )}
            </PopupState>
        );
    }

}


export default withStyles(styles)(PopState);
