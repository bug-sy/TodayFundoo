import React from 'react'
import { firebaseAuth } from '../firebase'
import { boardsRef, newPostRef } from '../firebase'
import UserSignup from './User_signup_form'



class UserSignupmain extends React.Component {
    state =
        {
            user: {},
            emailerror: '',
            emailError: [],
            passwordError: [],
            passworderror: '',
        }

    //starting of the input user 
    componentDidMount() {
        firebaseAuth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: {
                        id: user.uid,
                        email: user.email
                    }
                })

            }
            else {
                this.setState({
                    user: {}
                })
            }
        })
    }


    //ending of the input user
    //---------------
    //Signup method start 
    signUp = async (first_name, last_name, email, password, e) => {
        console.log(email)
        e.preventDefault()
        await firebaseAuth.createUserWithEmailAndPassword(
            email,
            password
        ).then((success) => {
            newPostRef.ref('/users /' + success.user.uid + '/userData/').push({
                first_name: first_name,
                last_name: last_name,
            })
        })
            .catch((err) => {

                if (!email || !password) {
                    if (!email && !password) {
                        this.setState({
                            emailerror: "please enter email",
                            emailError: [true],
                            passworderror: "please enter password",
                            passwordError: [true]


                        })
                    }

                    else if (!email) {
                        this.setState({
                            emailerror: "please enter email",
                            emailError: [true],


                        })
                    }

                    else if (!password) {
                        this.setState({
                            passworderror: "please enter password",
                            passwordError: [true]
                        })
                    }
                }

                else {
                    console.log(JSON.stringify(err))
                }
            })
    }

    


    //Signin method end 
    //-----------------
    /////render method
    render() {
        return (
            // <AuthContext.Provider
            //     value={{
            //     user: this.state.user,
            //     signUp: this.signUp,
            //     logIn: this.logIn,
            //     error: this.state.emailerror,
            //     emailError: this.state.emailError[0],
            //     password: this.state.passworderror,
            //     passwordError: this.state.passwordError[0],

            // }}>
            // {this.props.children}
            // </AuthContext.Provider>
            <div>
                <UserSignup
                    signUp= {this.signUp}
                    error={this.state.emailerror}
                    emailError={this.state.emailError[0]}
                    password={this.state.passworderror}
                    passwordError={this.state.passwordError[0]}
                />
            </div>
        )
    }
    //render method ends 
}
//class ends here


export default UserSignupmain