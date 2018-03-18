import React from 'react';
import SelectButton from '../components/SelectButton.js';


class SelectCont extends React.Component{
   


	componentDidMount() {
			
	}

	renderButton(label,index) {
	    return <SelectButton index={index} label={label} />;
	}


    render() {
		const opts = this.props.options
		const listItems = opts.map((city,index) =>
		    <div key={index}>
		    	{this.renderButton(city)}
		    </div>
		  );

      	return (
      		<ul>{listItems}</ul>
    )}
}

export default SelectCont;