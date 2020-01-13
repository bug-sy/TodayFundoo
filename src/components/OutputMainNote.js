import React from 'react';
import { withStyles } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
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

};

class SimplePopper extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Paper component="form" className={classes.root}>

                <InputBase
                    className={classes.input}
                    placeholder="Input text"
                    inputProps={{ 'aria-label': 'search google maps' }}
                ></InputBase>

                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton} aria-label="directions">

                </IconButton>
            </Paper>
        );
    }
}



export default withStyles(styles)(SimplePopper);