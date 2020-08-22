import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class UserForm extends React.Component {
    emailInput = React.createRef()
    passwordInput = React.createRef()

    render() {
        return (
            <div className="main_page">
                <div className="icon">
                    <form className="">
                        <div>
                            <div className="sign_in_button"><h1> Sign In </h1></div>
                            <div className="sign_up_button"><h4> Use your google account </h4></div>
                            <div >
                            <input
                              onChange={(event) => {
                                this.setState({input: event.target.value})}}
                            type="text" />

                                <TextField
                                    className="text"
                                    inputRef={this.emailInput}
                                    name='email'
                                    error={this.props.emailError}
                                    id = 'email'
                                    label="Email"
                                    type="Email"
                                    size="small"
                                    variant="outlined"
                                    margin="normal"
                                    helperText={this.props.error}
                                    onChange={(event) => {
                                        this.setState({email: event.target.value})}}
                                        
                                /><br />
                                <Grid container spacing={3}>
                                    <Grid item xs={12} variant="contained" >
                                        Email can contain period.
                                    </Grid>
                                </Grid>
                            </div>
                            <div >
                                <TextField
                                    className="text"
                                    inputRef={this.passwordInput}
                                    id="standard-password-input"
                                    label="Password"
                                    name='password'
                                    type="password"
                                    autoComplete="current-password" 
                                    size="small"
                                    variant="outlined"
                                    margin="normal"
                                    error={this.props.passwordError}
                                    helperText={this.props.password}      
                                    onChange={(event) => {
                                        this.setState({passwordTest: event.target.value})}}                                                          
                                />
                            </div>

                            <div className="sign_in_button">
                                <Button variant="contained" color="primary" onClick={(e) => this.props.logIn(
                                    this.emailInput.current.value,
                                    this.passwordInput.current.value,
                                    e
                                )}>
                                    Sign In
                                </Button>
                            </div>

                            <div className="sign_in_button">
                                <Button variant="contained" color="primary" href="/Signup">
                                    Sign Up
                                </Button>
                            </div>
                            <div className="sign_up_button">
                                <Button variant="contained" color="primary" href="/sign_up">
                                    <Grid item xs variant="contained"  >
                                        Reset Password ?
                                    </Grid>
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UserForm