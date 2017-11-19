/*ReactDOM.render(
	React.createElement('h1',null,'Balaji world')
	,
	document.getElementById('content')
	)
*/
	var h1=React.createElement('a',{href:'demo',target:'_blank',title:'Google Link'},'Koimoi world');
	var content=document.getElementById('content');
ReactDOM.render(h1,content);

