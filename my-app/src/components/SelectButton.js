import React from 'react';

class SelectButton extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			clicked: false
		};
	    
	    // This binding is necessary to make `this` work in the callback
	    this.toggleOption = this.toggleOption.bind(this);
	  }
   
	toggleOption() {
	    this.props.onClick();
	    console.log('The link was clicked.');
	    this.setState({
	      clicked: !this.state.clicked
	    });
	  }

   render() {
      return (
		      <button className={this.props.className}
		      		  onClick={() => this.toggleOption()} >
		        { this.state.clicked? this.props.label + 'X' : this.props.label }
		      </button>
      )}
}

export default SelectButton;