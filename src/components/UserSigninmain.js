import React from 'react'
import { firebaseAuth } from '../firebase'
import { boardsRef, newPostRef } from '../firebase'
import UserSigin from './User_signin'

const AuthContext = React.createContext()

class AuthProvider extends React.Component{
    state =
    {
        user:{},
        emailerror: '',
        emailError:[],
        passwordError:[],
        passworderror:'',
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
        else 
        {
                this.setState({
                        user: {}
                        })
                    }
                })
        }


//ending of the input user
//---------------
//Signup method start 
signUp = async (first_name,last_name,email, password, e) => 
{
    console.log(email)
    e.preventDefault()
    await firebaseAuth.createUserWithEmailAndPassword(
        email,
        password
        ).then((success) => {
            newPostRef.ref('/users /' + success.user.uid + '/userData/').push({
                first_name: first_name,
                last_name: last_name,
            })})
                .catch((err) => 
        {
                
        if (!email || !password) 
        {
                    if (!email && !password) 
                    {
                        this.setState({
                            emailerror: "please enter email",
                            emailError: [true],
                            passworderror: "please enter password",
                            passwordError: [true]


                        })
                    }

                    else if (!email) 
                    {
                            this.setState({
                                emailerror: "please enter email",
                                emailError: [true],


                            })
                    }

                    else if (!password) 
                    {
                        this.setState({
                            passworderror: "please enter password",
                            passwordError: [true]
                        })
                    }                   
        } 

        else
        {
               console.log(JSON.stringify(err))
        }
        })
}

//Signup method end
//------------------------
/////////Signin method start 
logIn = async (email, password, e) => 
{
    e.preventDefault()
    await  firebaseAuth.signInWithEmailAndPassword(
        email,
        password,
    ).then((success) => {

    console.log("uid" + success.user.uid)
    localStorage.setItem('uid', success.user.uid)
       // const uid = localStorage.getItem('uid')
       // console.log('app : ' + uid);

       
    }).catch((err) =>{

    if (!email || !password) 
    {

                                if (!email && !password) 
                                {
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
                                    else if (!password) 
                                    {
                                        this.setState({
                                        passworderror: "please enter password",
                                        passwordError: [true]
                                        })
                                    }

                                }
                                else 
                                {
                                        this.setState({
                                            passworderror: "wrong password,press reset password",
                                            passwordError: [true]
                                        })
                                }
                            console.log(JSON.stringify(err))

    })
    }



//Signin method end 
//-----------------
/////render method
render(){
        return(
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
                <UserSigin 
                    logIn={this.logIn}
                    error= {this.state.emailerror}
             emailError= {this.state.emailError[0]}
             password= {this.state.passworderror}
             passwordError= {this.state.passwordError[0]}
            />
            </div>
             )
        }
//render method ends 
        }
//class ends here

const AuthConsumer = AuthContext.Consumer
export default AuthProvider