/*ReactDOM.render(
	React.createElement('h1',null,'Balaji world')
	,
	document.getElementById('content')
	)
*/


/**************** hello world ***************/
/*	var h1=React.createElement('a',{href:'demo',target:'_blank',title:'Google Link'},'Koimoi world');
	var content=document.getElementById('content');
ReactDOM.render(h1,content);*/

/**************** multiple componenet  ***************/

		/*var h1=React.createElement('a', null,'Koimoi world');
		var p=React.createElement('p', null,'A Quick jump to React ');
		var content=document.getElementById('content');
		ReactDOM.render(React.createElement('div',null,h1,p),content);

		*/
	
/************************************************************************************************************************************************

****************************************************  step 2 ********************************************************************************/
/*class CustomerComponenet extends React.Component {

	render(){
		return React.createElement('h1',null,'First Component');
	}
}

var firstConponent = React.createElement(CustomerComponenet,null);

var content = document.getElementById('content');

ReactDOM.render(firstConponent,content);*/

/**********  Multiple componenet  ****/

/*		var h1=React.createElement('a', null,'Koimoi world');
		var p=React.createElement('p', null,'A Quickccc jump to React ');

	class CustomerComponenet extends React.Component {

		render(){
			return React.createElement('div',null,h1,p);
		}
	}

var firstConponent = React.createElement(CustomerComponenet,null);

var content = document.getElementById('content');

ReactDOM.render(firstConponent,content);
*/

/**********  Next Step  ****/


	class CustomeLink extends React.Component {
		render(){
			/*console.log(this.props,'this.props');*/
			return (
					/*React.createElement('a',null,'Google')*/
					React.createElement('a',this.props,this.props.linktext)
				   )
		}
	}

var mylink = React.createElement('div',null,

		React.createElement(CustomeLink, {href:'https://www.google.com',linktext:'Google'}),
		React.createElement(CustomeLink, {href:'https://www.facebook.com',linktext:'facebook'} ),
		React.createElement(CustomeLink, {href:'https://www.youtube.com',linktext:'Youtube'} )

	) 

var content = document.getElementById('content');

ReactDOM.render(mylink,content);

