import React from 'react';
import SelectCont from './SelectCont.js';

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

   render() {
      return <div>
                <h1>Hello World!</h1>
                <p>This is my first React Component.</p>
 	        	<SelectCont />
             </div>
      }
}

export default FormContainer;