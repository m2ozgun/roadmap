import React from 'react'
import { Link } from 'react-router-dom'
import { AUTH_TOKEN } from './constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const SIGNUP_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`

const LOGIN_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`


class Login extends React.Component {
    state = {
        login: true,
        email: '',
        name: '',
        password: '',
    }

    saveUserData = token => {
        // TODO Find a better way!
        localStorage.setItem(AUTH_TOKEN, token)
    }

    confirm = async data => {
        const { token } = this.state.login ? data.login : data.signup
        this.saveUserData(token)
        this.props.history.push(`/`)
      }
    render() {
        const { login, email, name, password } = this.state
        return (
            <div className="mw8 center ph3-ns">

            <article className="pa4 black-80 ">
                    <h4 className="mv2 f3">{login ? 'Login' : 'Sign Up'}</h4>

                    {!login && (
                        <form action="sign-up_submit" method="get" accept-charset="utf-8">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0" >
                            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="name">Name</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="text" 
                                    name="name"  
                                    id="name"
                                    onChange={e => this.setState({ name: e.target.value })}
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                                <input 
                                    className="pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address" 
                                    onChange={e => this.setState({ email: e.target.value })}
                                    />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent w-100 measure"
                                    type="password" 
                                    name="password"  
                                    id="password" 
                                    onChange={e => this.setState({ password: e.target.value })}

                                    />
                            </div>
                            </fieldset>
                        </form>

                    )}
                    {login &&(
                        <form action="sign-in_submit" method="get" accept-charset="utf-8">
                            <fieldset id="sign_in" className="ba b--transparent ph0 mh0" >
                            <legend className="ph0 mh0 fw6 clip">Sign Up</legend>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="email-address">Email address</label>
                                <input className="pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="email" 
                                    name="email-address"  
                                    id="email-address"
                                    onChange={e => this.setState({ email: e.target.value })}
                            />
                            </div>
                            <div className="mt3">
                                <label className="db fw4 lh-copy f6" for="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent w-100 measure" 
                                    type="password" 
                                    name="password"  
                                    id="password"
                                    onChange={e => this.setState({ password: e.target.value })}
                                />
                            </div>
                            </fieldset>
                        </form>
                    )}
                    <div className="mt3">
                        <Mutation
                            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                            variables={{ email, password, name }}
                            onCompleted={data => this.confirm(data)}
                        >
                            {mutation => (<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6" type="submit" onClick={mutation} value={login ? "Login" : "Sign Up"} />)}
                        </Mutation>
                    </div>
                    <div className="mt3"><Link to="/login"             
                                            onClick={() => this.setState({ login: !login })}
                                            className="b b--black bg-transparent f6">{login ? "Don't have an account? Sign in." : "Already have an account? Login."}</Link></div>


                </article>
                </div>
        )
    }
}

export default Login