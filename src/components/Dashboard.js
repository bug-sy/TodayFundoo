import React from 'react';
import { toggleGridorList } from '../components/UsingRedux'
import { connect } from 'react-redux'
import Paper from '@material-ui/core/Paper';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import Profile from './Profile'
import AppsOutlinedIcon from '@material-ui/icons/AppsOutlined';
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
import ClickAwayforNotes from './ClickAwayforNotes';
import Setting from './Settings'
import CustomizedDrawer from './CustomizedDrawer'
import { createMuiTheme } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/styles";

const theme = createMuiTheme({
    spacing : 4
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
    sectionDesktop : {
        display : 'none',
        [theme.breakpoints.up('md')]: {
            display : 'flex',
        },
    },

    inputInput : {
        padding : theme.spacing(1, 1, 1, 7),
        transition : theme.transitions.create('width'),
        width : '100%',
        [theme.breakpoints.up('md')]: {
            width : 200,
        },
    },

    root : {
        display : 'flex',
    },
    grow : {
        flexGrow : 1,
    },

    appBar: {
        transition : theme.transitions.create(['margin', 'width'], {
            easing : theme.transitions.easing.sharp,
            duration : theme.transitions.duration.leavingScreen,
            backgroundColor : fade(theme.palette.common.white, 0.15),
            boxShadow: 60
        }),
    },

    search : {
        position : 'relative',
        borderRadius : theme.shape.borderRadius,
        '&:hover': {
            backgroundColor : fade(theme.palette.common.white, 0.25),
        },
        marginRight : theme.spacing(1),
        marginLeft : 0,
        width : 400,
        [theme.breakpoints.up('sm')]: {
            marginLeft : theme.spacing(3),
            width : 800,
            height :50,
            backgroundColor : 'lightGrey'
        },
    },



    menuButton : {
        marginRight : theme.spacing(2),
    },

    hide : {
        display : 'none',
    },

    setting : {
        '& .MuiPaper-elevation16': {
            boxShadow : 'none',
        },
        marginRight : 80,
        width : 60
    },

    List : {
        marginRight : 0,
    },

    keepImage : {
        backgroundImage : "url('https://www.gstatic.com/images/branding/product/2x/keep_48dp.png')",
        height : '48px',
        width : '48px',

    },

    Refresh : {
        marginRight : 0,
    },
};

class PersistentDrawer extends React.Component {
    render(){
        const {classes} = this.props;
        console.log("Dashboardprops = ",this.props)

        return (
            <div className = {classes.root}>
                <CssBaseline />
                <AppBar
                    position = "fixed"
                    className = {classes.appBar}
                    color ='inherit'
                >
                    <Toolbar>
                        <Badge>
                            <CustomizedDrawer DashboardProps={this.props}/>
                        </Badge>
                        <Badge>
                            <EmojiObjectsIcon style={{ backgroundColor: '#feefc3', borderRadius: 4 }} />
                        </Badge>
                            <Typography variant="h6" noWrap>
                                Keep
                            </Typography>
                        
                            <Paper component="form" className={classes.search}>
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Search "
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                    value={this.props.gridOrList}
                                />


                            </Paper>
                        
                        <div className={classes.grow} />
                        <div className={classes.sectionDesktop}>
                            <Badge color="secondary">
                                <IconButton className={classes.Refresh}><RefreshOutlinedIcon/></IconButton>
                            </Badge>
                           
                           <Badge color="secondary">
                            {
                                this.props.gridOrList == true
                            ?
                                <IconButton className={classes.List} onClick={this.props.toggleGridorList}><DnsOutlinedIcon/></IconButton>
                            :
                                <IconButton className={classes.List} onClick={this.props.toggleGridorList}><AppsOutlinedIcon /></IconButton>
                            }
                         </Badge>
                            <Badge color="secondary">
                                <IconButton color="inherit" className={classes.setting}> <Setting/> </IconButton>
                            </Badge>
                            <IconButton>
                                <Badge>
                                    <Profile />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        gridOrList: state.gridOrList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        toggleGridorList: () => dispatch(toggleGridorList())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(PersistentDrawer));