import React, { Component } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from '@material-ui/styles';
import Typography from "@material-ui/core/Typography";
import Popper from "@material-ui/core/Popper";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },

    paper: {
        border: '1px solid',
        padding: theme.spacing(1),
        backgroundColor: theme.palette.background.paper,
    },

    card: {
        minWidth: 175,

    },

    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },

    title: {
        fontSize: 14,
    },

    pos: {
        marginBottom: 12,
    },
};
class SimplePopper extends Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showPopper: false,
            }
        this.profileRef = React.createRef();
    }

    render() {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}>•</span>;

        return (
            <div>
                <div>
                    <Button
                        variant="contained" color="primary"
                        onClick={() => this.setState({ showPopper: !this.state.showPopper })}
                        ref={this.profileRef}
                    >
                        Toggle Popper
                        </Button>

                    <Popper
                        style={{ backgroundColor: 'lightyellow' }}
                        open={this.state.showPopper}
                        anchorEl={this.profileRef.current}
                    //onClose={this.paperhandleClose}

                    >
                        <div>
                            <Card className={classes.card}>
                                <CardContent>
                                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                                        Word of the Day
                                        </Typography>
                                    <Typography variant="h5" component="h2">
                                        be{bull}nev{bull}o{bull}lent
                                        </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        adjective
                                        </Typography>
                                    <Typography variant="body2" component="p">
                                        well meaning and kindly.
                                        <br />
                                        {'"a benevolent smile"'}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </Popper>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SimplePopper);