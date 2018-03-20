import React from 'react';
import SelectButton from '../components/SelectButton.js';
import myData from '../sc_3_19_18.json';
import Chart from '../Chart.js';


class SelectCont extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			showViz: true,
			options: [],
			selected: [],
			selectedLines:[]
		};
	    // This binding is necessary to make `this` work in the callback
	    this.toggleOption = this.toggleOption.bind(this);
	    this.toggleLine = this.toggleLine.bind(this);
	}

	componentDidMount() {	
	}

	toggleOption(e) {		
		var currentSelected = this.state.selected.slice();
		var index = currentSelected.indexOf(e);
		if ( index < 0 ) {
			currentSelected.push( e )
		} else {
			currentSelected.splice(index, 1)
		}
		this.setState({
	      selected: currentSelected
	    });
	}

	toggleLine(e) {		
		console.log( e )
		var currentSelected = this.state.selected.slice();
		var index = currentSelected.indexOf(e);
		if ( index < 0 ) {
			currentSelected.push( e )
		} else {
			currentSelected.splice(index, 1)
		}
		this.setState({
	      selected: currentSelected
	    });
	}

	renderButton(label,index) {
	    return <SelectButton index={index} label={label} onClick={() => this.toggleOption(label) } />;
	}

	renderLineButton(label,index) {
	    return <SelectButton index={index} label={label} onClick={() => this.toggleLine(label) } />;
	}
	

    render() {
		const set1 = new Set( myData.map(x => x['city']) );	
		const listItems = [...set1].map((city,index) =>
		    <div key={index}>
		    	{this.renderButton(city)}
		    	{this.renderLineButton(city)}
		    </div>
		  );

      	return (
      		<div>
      		<ul>{listItems}</ul>
      		<Chart	data={myData}
      				selected={this.state.selected}
      				activation={this.state.showViz}
      				size={[500,500]} />
      		</div>
    )}
}

export default SelectCont;