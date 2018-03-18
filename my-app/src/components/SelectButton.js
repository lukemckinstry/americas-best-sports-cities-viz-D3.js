import React from 'react';

class SelectButton extends React.Component{
   render() {
      return (
	      <button className="selectButton">
	        {this.props.value}
	      </button>
      )}
}

export default SelectButton;