import React, { Component } from 'react';

export class Sessions extends Component {
    constructor(props) {
        super(props);
        this.state = {

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
            console.log(JSON.stringify(response));
        });
    }

    render() {
        return (<div>
            <button onClick={()=>this.createSession()}> 
                Create Session
            </button>
        </div>);
    }
}
