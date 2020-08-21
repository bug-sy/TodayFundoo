import React from 'react';
import ToggleNote from './toggleNote';
import Board from './Board'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

class ClickAway extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showNote: true,
        }
    }

    handleShowNotesClose = () => {
        this.setState({
            showNote: false,
        })
    }

    handleClickAway = () => {
        this.setState({
            showNote: true,
        })
    }

    render() {
        return (
            <div className="divisionforNotes">
                {
                    this.state.showNote == true ?
                        (
                            <div onClick={this.handleShowNotesClose} >
                                <ToggleNote />
                            </div>
                        )
                        :
                        <ClickAwayListener onClickAway={this.handleClickAway}>
                            <div>
                                <Board createNewBoard={this.props.createNewBoard} />
                            </div>
                        </ClickAwayListener>
                }
            </div>
        )
    }
}

export default ClickAway