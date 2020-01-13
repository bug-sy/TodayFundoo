import React from 'react';
import NotesIcon from '@material-ui/icons/Notes';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import ArchiveIcon from '@material-ui/icons/Archive';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = '250px';

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root: {
        display: 'flex',
    },

    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
            boxShadow:4
        }),
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    hide: {
        display: 'none',
    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        top: '50px',
        paper: {
            top: '50px',
            [theme.breakpoints.up('sm')]: {
                top: '65px',
            },
        },
        '& .MuiPaper-elevation16': {
            boxShadow: 4,
        },
        '& .MuiBackdrop-root': {
            backgroundColor: 'rgba(255, 255, 255, 255)',
        },
    },

    drawerPaper: {
        width: drawerWidth,
        '& .MuiDrawer-paper': {
            top: '4em',
        }
    },

    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }, 
};

const CustomDrawer = withStyles(
    {
        paper: {
            top: '65px',
            boxShadow: 70,
            width: drawerWidth,
        }
    }

)(Drawer)

class TemporaryDrawer extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showLeft: false,
                coloranchorEl:'Notes'
            }
        this.drawerRef = React.createRef();
    }

    render() {
        const classes = this.props;





        return (
            <div className={classes.root}>            
                <CssBaseline />              
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => this.setState({ showLeft: !this.state.showLeft })}
                            ref={this.drawerRef}                      
                        >
                            <MenuIcon />
                        </IconButton>
                    </Toolbar>              
                <CustomDrawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={this.state.showLeft}
                    anchorEl={this.drawerRef.current}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <Divider />
                    <List >
                        {['Notes', 'Reminders'].map((text, index) => (
                            <ListItem 
                            button key={text} 
                            onClick={() => this.setState({ coloranchorEl:text})}
                            style={{ backgroundColor: this.state.coloranchorEl === text ? '#feefc3' : '', borderRadius: 16 }}
                            >
                                <ListItemIcon >{index % 2 === 0 ? <NotesIcon /> : <AddAlertIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Edit labels'].map((text) => (
                            <ListItem 
                            button key={text} 
                            onClick={() => this.setState({ coloranchorEl: text })}
                            style={{ backgroundColor: this.state.coloranchorEl === text ? '#feefc3' : '', borderRadius: 16 }}
                            >
                                <ListItemIcon>{<EditIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Archive', 'Trash',].map((text, index) => (
                            <ListItem 
                            button key={text} 
                            onClick={() => this.setState({ coloranchorEl: text })}
                            style={{ backgroundColor: this.state.coloranchorEl === text ? '#feefc3' : '', borderRadius: 16 }}
                            >
                                <ListItemIcon>{index % 2 === 0 ? <ArchiveIcon /> : <DeleteIcon />}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </CustomDrawer>
            </div>
        );
    }
}


export default withStyles(styles)(TemporaryDrawer);
