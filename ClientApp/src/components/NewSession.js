import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { TextField, Button }  from '@material-ui/core/';

export class NewSession extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionValidCheck: '',
        };
    }

    createSession = () => {
        console.log("Create session is clicked");
        fetch('SessionInfo/Session/CreateSessionId', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return {sessionId: 0};
            }
        }).then(response => {
            if (response.sessionId == 0) {
                this.setState({
                    sessionValidCheck: 'dbError',
                    invalidToken: false,
                });
            } else {
                this.setState({
                    sessionId: response.sessionId,
                    sessionValidCheck: 'success',
                    invalidToken: false,
                });
            }
        });
    }

    render() {
        if (this.state.sessionValidCheck == '') {
            return (<div>
                    <Button variant="contained" onClick={() => this.createSession()} >
                        Create Session
                    </Button>
            </div>);
        } else if (this.state.sessionValidCheck == 'success') {
            console.log('success', this.state.sessionId);
            return (<Redirect
                to={{
                    pathname: '/viewPackages',
                    state: {sessionId: this.state.sessionId}
                }}
            />);
        } else if (this.state.sessionValidCheck == 'dbError') {
            return(<div> DB error </div>)
        }
    }
}
