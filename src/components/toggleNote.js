import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        // marginLeft:48,
        width: 400,
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
}));

export default function CustomizedInputBase() {
    const classes = useStyles();

    return (
        <Paper component="form" className={classes.root}>

            <InputBase
                className={classes.input}
                placeholder="Take a note..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />

            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <AddOutlinedIcon />
            </IconButton>
            <IconButton className={classes.iconButton} aria-label="directions">
                <EditOutlinedIcon />
            </IconButton>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <ImageOutlinedIcon />
            </IconButton >

        </Paper>
    );
}
