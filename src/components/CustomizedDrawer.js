import React from 'react';
import NotesIcon from '@material-ui/icons/Notes';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import { createLabelNote, getLabels } from '../firebase.js'
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
import EditLabelDialog from '../components/Label/EditLabelDialog'
import { Typography } from '@material-ui/core';

const drawerWidth = '250px';

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    root : {
        display : 'flex',
    },
  
};

const CustomDrawer = withStyles(
    {
        paper : {
            top : '65px',
            boxShadow : 70,
            width : drawerWidth,
        }
    }
)(Drawer)

class TemporaryDrawer extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showLeft: false,
                coloranchorEl:'Notes',
                labels: null
            }
        this.drawerRef = React.createRef();
    }

    componentDidMount() {
        getLabels((labels) => {
            this.setState({
                labels: labels
            }, () => {
                console.log("I am inside customized drawer --------> :", this.state.labels)
            })
        })
    }

    render() {
        const {classes} = this.props;
        
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
                            button 
                            key={text} 
                            onClick={() => {
                                
                                this.setState({ coloranchorEl:text})
                                if (text == 'Notes') {
                                    this.props.DashboardProps.history.push({ pathname:'/Dashboard/Parsing'})
                                } 
                                else {
                                    this.props.DashboardProps.history.push('/Dashboard/Reminder')
                                } 
                                }}
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
                            button 
                            key={text} 
                            onClick={() => this.setState({ coloranchorEl: text })
                            }
                            style={{ backgroundColor: this.state.coloranchorEl === text ? '#feefc3' : '', borderRadius: 16 }}
                            >
                                <ListItemIcon>{<EditIcon />}</ListItemIcon>
                                <EditLabelDialog/>
                            </ListItem>
                        ))}
                        {this.state.labels !== null &&
                            Object.getOwnPropertyNames(this.state.labels).map((key)=>(
                            <ListItem
                                button
                                    key={this.state.labels[key]}
                                    onClick={() => 
                                    {
                                        this.setState({ coloranchorEl: this.state.labels[key] }) 
                                        this.props.DashboardProps.history.push({
                                            pathname: '/Dashboard/LabelMapping',
                                            state: { title: this.state.labels[key].labelName } 
                                        })
                                    }
                                }
                                    style={{ backgroundColor: this.state.coloranchorEl === this.state.labels[key] ? '#feefc3' : '', borderRadius: 16 }}
                            >
                                    <ListItemIcon>{<LabelOutlinedIcon/>}</ListItemIcon>
                                    <Typography>{this.state.labels[key].labelName}</Typography>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {['Archive', 'Trash',].map((text, index) => (
                            <ListItem 
                            button key={text} 
                                onClick={() => {

                                    this.setState({ coloranchorEl: text })
                                    if (text == 'Archive') {
                                        this.props.DashboardProps.history.push('/Dashboard/Archive')
                                    }
                                    else{
                                        this.props.DashboardProps.history.push('/Dashboard/Trash')
                                    }
                                  


                                }}   style={{ backgroundColor: this.state.coloranchorEl === text ? '#feefc3' : '', borderRadius: 16 }}
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
