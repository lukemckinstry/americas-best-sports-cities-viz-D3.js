import React from 'react';

class SelectButton extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {
			selected: false
		};
	    
	    // This binding is necessary to make `this` work in the callback
	    this.toggleOption = this.toggleOption.bind(this);
	  }
   
	toggleOption(e) {
	    e.preventDefault();
	    console.log('The link was clicked.');
	    this.setState({
	      selected: !this.state.selected
	    });
	  }

   render() {
      return (
		      <button className={this.props.className} onClick={() => this.props.onClick()}>
		        {this.props.label}
		      </button>
      )}
}

export default SelectButton;