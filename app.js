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
class CustomerComponenet extends React.Componenet{
	render(){
		return React.createElement('h1',null,'First Component');
	}
}

var firstConponent=React.createElement(CustomerComponenet,null);

var content=document.getElementById('content');

ReactDOM.render(firstConponent,componenet)
