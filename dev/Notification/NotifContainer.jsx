import React, {Component} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Notification extends Component {
    constructor(props){
        super(props);
    }
    onClose(e){
        return this.props.onClose({event:e})
    }
    render(){
        return(
            <div style={{position: 'fixed', top:0, right:0, width: '300px'}}>
            <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                    {this.props.children}
            </CSSTransitionGroup>
            </div>

        );
    }
}