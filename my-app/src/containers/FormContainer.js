import React from 'react';
import myData from '../sc_3_17_18.json';
import Chart from '../Chart.js';
import SelectCont from './SelectCont.js';


class FormContainer extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			options: ['womp','domp'],
			showViz: true,
		};
	}

	componentDidMount() {
		const set1 = new Set( myData.map(x => x['city']) );	
		let array = [...set1];	
		this.setState({
	      options: array
	    });


	
	}


   render() {
      return <div>
                <h1>Hello World!</h1>
                <p>This is my first React Component.</p>
 	        	<SelectCont options={ this.state.options }/>
 	        	<Chart data={	myData  } activation={this.state.showViz} size={[500,500]} />
{/* <Chart data={	this.state.formData  } activation={this.state.showViz} size={[500,500]} /> */}
	         

             </div>
      }
}

export default FormContainer;