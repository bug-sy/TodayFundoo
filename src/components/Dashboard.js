import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Profile from './Profile'
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import Badge from '@material-ui/core/Badge';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade, } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import RefreshOutlinedIcon from '@material-ui/icons/RefreshOutlined';
import ClickAwayforNotes from './clickAwayforNotes';
import Setting from './Settings'
import CustomizedDrawer from './CustomizedDrawer'
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },

    inputInput: {
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },

    root: {
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            backgroundColor: fade(theme.palette.common.white, 0.15),
        }),
    },

    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: 100,
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 600,
            backgroundColor: 'lightGrey'
        },
    },

    searchIcon: {
        width: theme.spacing(7),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    hide: {
        display: 'none',
    },

    setting: {
        '& .MuiPaper-elevation16': {
            boxShadow: 'none',
        },
        marginRight: 80,
        width: 60
    },

    List: {
        marginRight: 0,
    },

    keepImage: {
        backgroundImage: "url('https://www.gstatic.com/images/branding/product/2x/keep_48dp.png')",
        height: '48px',
        width: '48px',

    },

    Refresh: {
        marginRight: 0,
    },
};

class PersistentDrawer extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={classes.appBar}
                    color='inherit'
                >
                    <Toolbar>
                        <Badge>
                            <CustomizedDrawer />
                        </Badge>
                        <Badge>
                            <EmojiObjectsIcon style={{ backgroundColor: '#feefc3', borderRadius: 4 }} />
                        </Badge>
                        <Typography variant="h6" noWrap>
                            Keep
                        </Typography>
                        <div className={classes.search} >
                            <div className={classes.searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search…"
                                classes={{
                                    root: classes.inputRoot,
                                    input: classes.inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Badge color="secondary">
                                <IconButton className={classes.Refresh}><RefreshOutlinedIcon /></IconButton>
                            </Badge>
                            <Badge color="secondary">
                                <IconButton className={classes.List}><DnsOutlinedIcon /></IconButton>
                            </Badge>
                            <Badge color="secondary">
                                <IconButton color="inherit" className={classes.setting}> <Setting /> </IconButton>
                            </Badge>
                            <IconButton>
                                <Badge>
                                    <Profile />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>

                <main>
                    <div />
                    {/**<div className="divisionforNotes">
                        <ClickAwayforNotes createNewBoard={this.props.createNewBoard} />
                            </div>*/}
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(PersistentDrawer);