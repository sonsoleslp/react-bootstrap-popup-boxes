import React, {Component} from 'react';
import {Alert} from 'react-bootstrap';

export default class Notification extends Component {
    constructor(props){
        super(props);
    }
    onClose(e){
        return this.props.onClose({event:e})
    }
    render(){
        return(
                <Alert style={this.props.style} bsStyle={this.props.bsStyle} onDismiss={this.props.onClose}>
                    {this.props.children}
                </Alert>

        );
    }
}