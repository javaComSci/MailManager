import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Button } from '@material-ui/core';

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToNewSession: false,
            redirectToLogin: false, 
        }
    }

    handleOnClickNewSession = () => {
        console.log("new session");
        this.setState({
            redirectToNewSession: true,
        })
    }

    handleOnClickLogin = () => {
        console.log("login");
        this.setState({
            redirectToLogin: true,
        })
    }

    render() {
        if (this.state.redirectToNewSession) {
            return (<Redirect
                to={{
                    pathname: "/newSession",
                }}
            />);
        } else if (this.state.redirectToLogin) {
            return (<Redirect
                to={{
                    pathname: "/login",
                }}
            />);
        } else {
            return (<div>
                Package Manager
                <Button color="primary" variant="contained" onClick={() => this.handleOnClickNewSession()}>
                   Create New Session
                </Button>
                <Button color="primary" variant="contained" onClick={() => this.handleOnClickLogin()}>
                   Login
                </Button>
            </div>);
        }
    }
}
