import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
            width: theme.spacing(22),
            height: theme.spacing(33),
        },
    },

}));

const StyledMenuItem = withStyles(() => ({
    root: {
        '&:focus': {

            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: 'inherit',
            },
        },
    },
}))(MenuItem);

export default function SettingPopupState() {
    const classes = useStyles();

    return (

        <PopupState variant="popover" popupId="demo-popup-popover">
            {popupState => (
                <div>
                    
                        <SettingsOutlinedIcon variant="contained" color="inherit" {...bindTrigger(popupState)}/>
                    
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
                                        <ListItemText style={{ fontSize: 5 }} primary="Settings" />
                                </StyledMenuItem>

                                <StyledMenuItem>
                                    <ListItemText primary="Enable dark theme" onClick='handleClick' />
                                </StyledMenuItem>

                                <StyledMenuItem>
                                    <ListItemText primary="Send feedback" />
                                </StyledMenuItem>

                                <StyledMenuItem>
                                    <ListItemText primary="Help" />
                                </StyledMenuItem>

                                <StyledMenuItem>
                                    <ListItemText primary="App download" />
                                </StyledMenuItem>

                                <StyledMenuItem>
                                    <ListItemText primary="keyboard shortcuts" />
                                </StyledMenuItem>

                            </Paper>
                       </div>
                    </Popover>
                </div>
            )}
        </PopupState>
    );
}
