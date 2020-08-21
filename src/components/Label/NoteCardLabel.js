import React from 'react';
import NoteLableCheck from './NoteLableCheck'
import TextField from '@material-ui/core/TextField';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { getLabels, createLabelNoteInNotes } from '../../firebase.js'
import '../AddLable/AddLabel.css'
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    spacing: 4
});

const styles = {
    typography: {
        padding: theme.spacing(2),
    },
    card: {
        minWidth: 295,
        backgroundColor:"pink"
        
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
};

class AddLabel extends React.Component {
    constructor(props) {
        super(props)
        this.state =
            {
                showLabel: false,
                labelName: '',
                labels: null    
            }
        this.labelRef = React.createRef();
    }

    componentDidMount() {
        getLabels((labels) => {
            this.setState({
                labels: labels
            }, () => {
                console.log("labels are --------> :", this.state.labels)
            })
        })
    }

    render() {
        const { classes } = this.props;
        return (
          <div>
                    <Typography
                        style={{ width: 150 }}
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => this.setState({ showLabel: !this.state.showLabel })}
                        ref={this.labelRef}
                    >Add label</Typography>
                <Popover
                        variant="persistent"
                        anchor="left"
                        open={this.state.showLabel}
                        anchorEl={this.labelRef.current}
                        onClose={() => this.setState({ showLabel: !this.state.showLabel  })}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                >
                    <div className="addLabeContentAlignment">
                        <div className="addlabelPopOver">
                            <Typography style={{ dense: true }}>Edit Labels</Typography>
                        </div>
                        <div className="addlabelPopOver">
                        <TextField
                            className={classes.input}
                            placeholder="Enter label name"
                        />
                        <SearchOutlinedIcon/>
                        </div>
                        <div className="labelValues">
                            {this.state.labels !== null &&
                                Object.getOwnPropertyNames(this.state.labels).map((key) => (
                                    <NoteLableCheck
                                        labels={this.state.labels[key]}
                                        nkey={key}
                                        nKeyOfNoteCard={this.props.nkey}
                                        notes={this.props.notes}
                                    />
                                ))}
                        </div>
                        </div>
                </Popover>
            </div>   
        );
    }
}

export default withStyles(styles)(AddLabel)
