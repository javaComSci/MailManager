import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { TextField, Button }  from '@material-ui/core/';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionValidCheck: '',
            value: '',
        };
    }

    checkSession = () => {
        console.log("Check session is clicked", this.state.value);
        fetch('SessionInfo/Session/CheckSessionId', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sessionId: this.state.value,
            })
            }).then(response => {
                console.log("response")
                console.log(response);
            if (response.ok) {
                return response.json();
            } else {
                return {sessionId: 0};
            }
        }).then(response => {
            if (response.sessionId == 0) {
                this.setState({
                    sessionValidCheck: 'notFound',
                });
            } else {
                this.setState({
                    sessionId: response.sessionId,
                    sessionValidCheck: 'success',
                });
            }
        });
    }

    handleChange = (e) => {
        console.log("change");
        this.setState({
            value: e.target.value,
        })
    }

    render() {
        if (this.state.sessionValidCheck == '') {
            return (<div>
                <div>
                    <TextField  type = 'text'
                            value={this.state.value}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <Button color="primary" variant="contained" onClick={() => this.checkSession()} >
                        Check Session
                    </Button>
                </div>
            </div>);
        } else if (this.state.sessionValidCheck == 'success') {
            console.log('success', this.state.sessionId);
            return (<Redirect
                to={{
                    pathname: '/viewPackages',
                    state: {sessionId: this.state.sessionId}
                }}
            />);
        } else if (this.state.sessionValidCheck == 'notFound') {
            return (<div>
                Session not found.
                <div>
                    <TextField  type = 'text'
                            value={this.state.value}
                            onChange={(e) => this.handleChange(e)}
                        />
                    <Button color="primary" variant="contained" onClick={() => this.checkSession()} >
                        Check Session
                    </Button>
                </div>
            </div>);
        }
    }
}
