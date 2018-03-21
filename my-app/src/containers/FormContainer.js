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
 	        	<SelectCont />
             </div>
      }
}

export default FormContainer;