import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from './constants'

class Header extends React.Component {

    render(){
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <header className="sans-serif">
                <div className="cover bg-left bg-center-m">
                    <div className="bg-black-80">
                        <nav className="dt w-100 mw8 center"> 
                            <div className="dtc w2 v-mid pa3">
                            <a href="/" className="dib w2 h2 pa1  grow-large border-box">
                            <img src="logo192.png" alt="Logo" width="32"  />
                            </a>
                            </div>
                            <div className="dtc v-mid tr pa3">
                            {authToken && <Link to="/create" className="f6 fw4 hover-white no-underline white-70 dn dib-l pv2 ph3">Create</Link>}
                            {authToken ? <Link onClick={() => {
                                localStorage.removeItem(AUTH_TOKEN)
                                this.props.history.push(`/`)
                                }} className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">Logout</Link>: 
                                    <Link to="/login" className="f6 fw4 hover-white no-underline white-70 dib ml2 pv2 ph3 ba">Login / Sign Up</Link>}
    
                            </div>
                        </nav> 
                    </div>
                </div> 
            </header>
        )
    }
   
}

export default withRouter(Header)
