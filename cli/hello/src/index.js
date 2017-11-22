
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/*import App from './App';*/

import Hello1 from './helloworld';
import Method from './Method';
import Clock from './timeclock';
import Sclock from './stfclock';

/*********
./ = same folder 
App = it serch in node modules 
*/
import registerServiceWorker from './registerServiceWorker';

/*var h1 = React.createElement('h1',null,'Hello World');*/



ReactDOM.render(
	<div>
	<Hello1 link ='www.google.com'  linktext ='google'/>
	<Hello1 link ='www.facebook.com'  linktext ='facebook'/>
	<Hello1 link ='www.youtube.com'  linktext ='youtube'/>
	<Method />
	<Clock/>
	<Sclock/>
	</div>
	,document.getElementById('root'));
/*
 Normal React js 
var h1 = React.createElement('h1',null,'Hello World');



*/
 /************ JSX Syntax  ********************/
/*
    1 st check 
var h1 =<h1 style={{color:'red'}} title='this is name'> Balaji</h1>;
ReactDOM.render(h1, document.getElementById('root'));

*/



//registerServiceWorker();
