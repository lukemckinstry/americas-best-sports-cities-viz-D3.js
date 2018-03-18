import React from 'react';
import SelectButton from '../components/SelectButton.js';
import Chart from '../Chart.js';

class FormContainer extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			data: {},
			showViz: true,
		};
	}

	componentDidMount() {
		
	}

    renderSelectButton(i) {
    	return <SelectButton value={i} />;
  	}

   render() {
      return <div>
                <h1>Hello World!</h1>
                <p>This is my first React Component.</p>
	             {this.renderSelectButton(0)}
	             {this.renderSelectButton(0)}
	             {this.renderSelectButton(0)}
 	        	<Chart data={	this.state.data  } activation={this.state.showViz} size={[500,500]} />
{/* <Chart data={	this.state.formData  } activation={this.state.showViz} size={[500,500]} /> */}
	         

             </div>
      }
}

export default FormContainer;