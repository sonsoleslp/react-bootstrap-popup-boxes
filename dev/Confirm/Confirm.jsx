import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Button, Modal} from 'react-bootstrap';

export default class Confirm extends Component {
    constructor(props){
        super(props);
    }

    onClose(e, result){
        return this.props.onClose({event:e, result: result})
    }
    render(){
        return(
            <Modal className={this.props.className || 'popupAlert'} backdrop={this.props.backdrop === undefined ? true : this.props.backdrop} show={this.props.show} onHide={e=>{this.onClose(e,false)}}>
                {this.props.hasHeader ?
                    (this.props.closeButton ?
                        (<Modal.Header closeButton>
                            {this.props.title}
                        </Modal.Header>):
                        (<Modal.Header>
                            {this.props.title}
                        </Modal.Header>)):
                    (null)}
                <Modal.Body>
                    {this.props.children}
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle={this.props.bsStyle || 'default'} className="popupFooterButton" onClick={e=>{this.onClose(e,false)}}>
                        {this.props.cancelButtonText || 'Cancel'}
                    </Button>
                    <Button bsStyle={this.props.bsStyle || 'default'} className="popupFooterButton" onClick={e=>{this.onClose(e,true)}}>
                        {this.props.acceptButtonText || 'OK'}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}