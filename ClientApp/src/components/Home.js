import React, { Component } from 'react';
import { Redirect } from 'react-router'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
        }
    }


    handleOnClick = () => {
        console.log("here");
        this.setState({
            redirect: true,
        })
    }

    render() {
        if (this.state.redirect) {
            return (<Redirect
                to={{
                    pathname: "/sessions",
                }}
            />);
        } else {
            return (<div>
                Package Manager
                <button color="primary" onClick={() => this.handleOnClick()}>
                   Manage packages
                </button>
            </div>);
        }

    }
}
