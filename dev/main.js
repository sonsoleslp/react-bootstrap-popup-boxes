import React from 'react';
import ReactDOM from 'react-dom';
import {Button, FormControl, FormGroup} from 'react-bootstrap';
import Alert from './Alert/Alert';
import Confirm from './Confirm/Confirm';
import Prompt from './Prompt/Prompt';
import Notification from './Notification/Notification';
/*
 * Root Dev Component
*/
class Main extends React.Component{
	constructor(props){
		super(props);
		this.state={
			showAlert: false,
			showConfirm: false,
			showPrompt: false,
			showNotification: false,
			confirmResult: null,
			promptResult: null,
			promptFinalResult: null
		}
	}


	render(){
		return (<div style={{width:'100%', height:'100%', textAlign: 'center',padding: '20px'}}>
			<Button bsStyle="primary" onClick={e =>{console.log(e);this.setState({showAlert: true})}}> Alert </Button>
			<Alert show={this.state.showAlert}
					hasHeader={true}
				    title="Alert"
				    bsStyle={'default'}
					message="This is an alert!"
					acceptButtonText="OK"
				    closeButton={true}
				    backdrop={false}
					onClose={(e)=>{this.setState({showAlert: false})}}>
				<p>New alert!</p>
			</Alert>


			<br/><br/>
			<Button bsStyle="primary" onClick={e =>{this.setState({showConfirm: true})}}> Confirm </Button>
			<Confirm show={this.state.showConfirm}
					 hasHeader={true}
					 title="Confirm"
					 bsStyle={'default'}
					 acceptButtonText="OK"
					 cancelButtonText="Cancel"
					 closeButton={true}
					 backdrop={false}
					 onClose={(e)=>{this.setState({showConfirm: false, confirmResult: e.result})}}>
						<h1>This is the header</h1>
						<h2>Second header</h2>
						<p>Paragraph</p>
			</Confirm>

			{this.state.confirmResult !== null ? (<div>Confirm result: {this.state.confirmResult ? 'OK':'Cancel'}</div>):null}
			<br/><br/>



			<Button bsStyle="primary" onClick={e =>{this.setState({showPrompt: true})}}> Prompt </Button>
			<Prompt  show={this.state.showPrompt}
					 hasHeader={true}
					 bsStyle={'default'}
					 acceptButtonText="OK"
					 closeButton={true}
					 backdrop={false}
					 onClose={(e)=>{this.setState({showPrompt: false, promptFinalResult: this.state.promptResult})}}>
						<h1>This is a prompt</h1>
						<FormGroup controlId="popupFormGroup">
							<FormControl type="text" placeholder={"Insert text here"} value={this.state.promptResult} onChange={e=>{this.setState({promptResult: e.target.value})}} />
						</FormGroup>
			</Prompt>
			{this.state.promptFinalResult !== null ? (<div>Prompt result: {this.state.promptFinalResult}</div>):null}

			<br/><br/>
			<Button bsStyle="primary" onClick={e =>{this.setState({showNotification: true})}}> Notification </Button>
			{this.state.showNotification ?
				(<Notification bsStyle="danger"
							   message={"hello"}
							   style={{width: 'auto', position: 'absolute', top: 0, right: 0}}
							   onClose={(e)=>{this.setState({showNotification: false})}} >
									<h1>Hello</h1>
									<p>This is my message</p>
				</Notification>): (null)}

		</div>);
	}
}

export default Main;

ReactDOM.render(<Main/>,document.getElementById('app'));