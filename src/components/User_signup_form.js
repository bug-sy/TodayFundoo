import React from 'react'
import { AuthConsumer } from './UserSigninmain'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

class UserSign_up_Form extends React.Component {
    emailInput = React.createRef()
    passwordInput = React.createRef()
    confirmpasswordInput = React.createRef()
    first_name = React.createRef()
    last_name = React.createRef()
 
    render() {

        return (
           
                 
                        <div className="sign-up-wrapper">
                            <form>
                                <div className="icon">
                                    <div className='firstdiv'>

                                        <div>
                                            <h2 className="sign_up_button">Sign up for Account</h2>
                                            <TextField
                                                inputRef={this.first_name}
                                                className="firstname"
                                                label="First_name"
                                                margin="dense"
                                                type="text"
                                                size="small"
                                                variant="outlined"
                                            />
                                            <TextField
                                                inputRef={this.last_name}
                                                margin="dense"
                                                label="Last name"
                                                type="text"
                                                size="small"
                                                variant="outlined"
                                                className="lastname"
                                            />
                                        </div>

                                        <div>
                                            <TextField
                                                className="Email"
                                                inputRef={this.emailInput}
                                                id="#"
                                                label="Email"
                                                type="Email"
                                                size="small"
                                                variant="outlined"
                                                margin="normal"
                                                error={this.props.emailError}
                                                helperText={this.props.error}
                                            />
                                            <br />
                                            <Grid item xs  >
                                            Email can contain period.</Grid>
                                        </div>
                                        <div>

                                            <TextField
                                                inputRef={this.passwordInput}
                                                id="#1"
                                                label="Password"
                                                type="password"
                                                autoComplete="current-password"
                                                size="small"
                                                variant="outlined"
                                                margin="normal"
                                                error={this.props.passwordError}
                                                helperText={this.props.password}
                                            />

                                        <div>
                                            <TextField
                                                inputRef={this.confirmpasswordInput}
                                                id="#2"
                                                label="Confirm Password"
                                                type="password"
                                                autoComplete="current-password"
                                                size="small"
                                                variant="outlined"
                                                margin="normal"
                                            />
                                        </div>
                                        </div>

                                        <div>
                                            <Button variant="contained" color="secondary" onClick={(e) => this.props.signUp(
                                                this.first_name.current.value,
                                                this.last_name.current.value,
                                                this.emailInput.current.value,
                                                this.passwordInput.current.value,
                                               e
                                            )}>
                                                Sign Up</Button>
                                        </div>

                                    </div>
                                    <div><img className="image" src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="Smiley face" /></div>
                                </div>
                            </form>
                        </div>                 
        )
    }
}

export default UserSign_up_Form