import React from 'react';
import ReactDOM from 'react-dom';
import {Button, ButtonToolbar, ButtonGroup, FormControl, FormGroup} from 'react-bootstrap';
import Alert from './Alert/Alert';
import Confirm from './Confirm/Confirm';
import Prompt from './Prompt/Prompt';
import Notification from './Notification/Notification';
import NotifContainer from './Notification/NotifContainer';
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
			notifications: [],
			confirmResult: null,
			promptResult: null,
			promptFinalResult: null
		}
	}


	render(){

		let Notif = ({key, bsStyle, title, msg})  => (
			<Notification bsStyle={bsStyle}
				key={key}
				id={key}
				message={"hello"}
				style={{width: '98%', position: 'relative', margin: '1%', top: 0, right: 0}}
				onClose={(e)=>{
					var nots = this.state.notifications.slice();
					nots.splice(e.target.key, 1);
					this.setState({notifications: nots })
				   }} >
					<h1>{title}</h1>
					<p>{msg}</p>
			</Notification>);

		return (<div className="container">
			<h1>React Bootstrap Pop-up Boxes</h1>
			<div className="box">
				<h2>Alert</h2>
				<Button bsSize="large" onClick={e =>{this.setState({showAlert: true})}}> Alert </Button>
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
			</div>
			<div className="box">
				<h2>Confirm</h2>
				<Button bsSize="large" onClick={e =>{this.setState({showConfirm: true})}}> Confirm </Button>
				<Confirm show={this.state.showConfirm}
						 hasHeader={true}
						 title="Confirm"
						 bsStyle={'warning'}
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
 			</div>

			<div className="box">
				<h2>Prompt</h2>
				<Button bsSize="large" onClick={e =>{this.setState({showPrompt: true})}}> Prompt </Button>
				<Prompt  show={this.state.showPrompt}
						 hasHeader={true}
						 title="Prompt"
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
			</div>
			<br/><br/>
			<h2>Notifications</h2>
			<ButtonToolbar>
			      <ButtonGroup bsSize="large">
			        <Button bsStyle={"info"} onClick={e =>{this.setState({notifications: [...this.state.notifications, <Notif key={this.state.notifications.length} title="Info" msg="Find out more!" bsStyle="info"/>]})}}> info</Button>
			        <Button bsStyle={"success"} onClick={e =>{this.setState({notifications: [...this.state.notifications, <Notif key={this.state.notifications.length} title="Success!" msg="Operation finished correctly" bsStyle="success"/>]})}}>success</Button>
			        <Button bsStyle={"warning"} onClick={e =>{this.setState({notifications: [...this.state.notifications, <Notif key={this.state.notifications.length} title="Warning!" msg="Review your code" bsStyle="warning"/>]})}}>warning</Button>
			        <Button bsStyle={"danger"}  onClick={e =>{this.setState({notifications: [...this.state.notifications, <Notif key={this.state.notifications.length} title="Error" msg="There was a problem with your request" bsStyle="danger"/>]})}}>danger</Button>
			      </ButtonGroup>
			    </ButtonToolbar>
 			<NotifContainer>
				{this.state.notifications.map((n)=>{return n;})}
			</NotifContainer>
			<h3>Change Bootstrap CSS build</h3>
			<ButtonToolbar>
			    <ButtonGroup bsSize="large">
					<Button onClick={()=>{this.changeCSS('bootstrap.min.css', 0)}}>Classic</Button>
					<Button onClick={()=>{this.changeCSS('bootstrap.min.cosmo.css', 0)}}>Cosmo</Button>
					<Button onClick={()=>{this.changeCSS('bootstrap.min.flatly.css', 0)}}>Flatly</Button>
					<Button onClick={()=>{this.changeCSS('bootstrap.min.superhero.css', 0)}}>Superhero</Button>
			  </ButtonGroup>
			</ButtonToolbar>

		</div>);
	}

  	changeCSS(cssFile, cssLinkIndex) {
	    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

	    var newlink = document.createElement("link");
	    newlink.setAttribute("rel", "stylesheet");
	    newlink.setAttribute("type", "text/css");
	    newlink.setAttribute("href", cssFile);

	    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
	}
}

export default Main;

ReactDOM.render(<Main/>,document.getElementById('app'));