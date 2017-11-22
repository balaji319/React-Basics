import React, { Component } from 'react' ;


class Method extends Component {

	myFacebookLink(){
		return 'facebook.com'
	}
	facebookuser(){
		return 'Haider Ali'
	}
	render(){
		return(
				<div>
				<p> MyFacebook ID : <a href={this.myFacebookLink()}>{this.facebookuser()}</a></p>
				</div>
			)
	}
}

export default Method;