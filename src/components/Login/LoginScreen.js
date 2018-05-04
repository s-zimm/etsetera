import React, { Component } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setUserInfo } from '../../actions/actions';

class LoginScreen extends Component {
    constructor(props){
        super (props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleLogin = (event) => {
        let { password, email } = this.state
        let { setUserInfo } = this.props;
        event.preventDefault();
        let postData = {
            method: 'POST',
            url: 'https://etsetera.herokuapp.com/auth/local/',
            data: {
                identifier: email,
                password
            }
        }
        axios(postData)
            .then(data => setUserInfo(data.data))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <h3>Email</h3>
                    <input onChange={(e) => this.setState({ email: e.target.value })} type="text"/>
                    <h3>Password</h3>
                    <input onChange={(e) => this.setState({ password: e.target.value })} type="password"/>
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ setUserInfo }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginScreen);