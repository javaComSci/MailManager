import React, { Component } from 'react';
import { Redirect } from 'react-router';

export class ViewPackages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionId: this.props.location.state.sessionId,
        }
    }


    render() {
        return (<div> View Package Page {this.state.sessionId} </div>)
    }
}
