import React from 'react';
import * as d3 from 'd3';
import myData from './sc_3_17_18.json';

class Chart extends React.Component{
	constructor(props){
    	super(props)
    	this.draw = this.draw.bind(this)
    }

    componentDidMount() {
    	if ( this.props.activation === true )  {
        	//var data = this.generate();
        	var dataset = this.props.data 
        	this.draw( dataset );
      	}
      	if ( this.props.activation === false )  {
        	//this.remove();
    	}
   }

    draw( data ) {
    	console.log( "DRAW" );
    	console.log(data)
    	var margin = {top: 10, right: 80, bottom: 45, left: 80},
	    width = 1200 - margin.left - margin.right,
	    height = 600 - margin.top - margin.bottom;

		// Set the ranges
		var x = d3.scaleLinear().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

		// Define the axis
		function make_x_axis() {
		    return d3.axisBottom()
		        .scale(x)
		        .ticks(10);
		}
		function make_y_axis() {
		    return d3.axisLeft()
		        .scale(y)
		        .ticks(10);
		}

		console.log( myData )

		myData.forEach(function(d) {
		  d.year = +d.year;
		  d.pct = +d.pct;
		  d.city = d.city;
		  d.ff = d.ff;
		  d.champ = d.champ;
		  d.tooltip = d.tooltip;
		    });

		// Scale the range of the data
	    x.domain(d3.extent(data, function(d) { return d.year; }));
	    y.domain([0, 1]);

	    // Nest the entries by city
	    var dataNest = d3.nest()
	        .key(function(d) {
	            return d.city;})
	        .entries(myData);

	    console.log( dataNest )



		

		// var xAxis = d3.axisBottom()
		// 	.scale(x).orient("bottom").ticks(10);      
		// var yAxis = d3.axisLeft()
		// 	.scale(y).orient("left").ticks(10);

		// Define the line
		// var PCTline = d3.line()
		//     .x(function(d) { return x(d.year); })
		//     .y(function(d) { return y(d.pct); });

		const noode = this.noode

		//define div for the tooltip
		// var div = d3.select(noode).append("div")
		//     .attr("class", "tooltip")
		//     .style("opacity", 0);

		// Adds the svg canvas
		var svg = d3.select(noode)
		    .append("svg")
		        .attr("width", width + margin.left + margin.right)
		        .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		        .attr("transform",
		              "translate(" + margin.left + "," + margin.top + ")");

		//Add the grid
	    svg.append("g")
	        .attr("class", "grid")
	        .attr("transform", "translate(0," + height + ")")
	        .call(make_x_axis()
	            .tickSize(-height, 0, 0)
	            .tickFormat("")
	        )

	    svg.append("g")
	        .attr("class", "grid")
	        .call(make_y_axis()
	            .tickSize(-width, 0, 0)
	            .tickFormat("")
	        )

	    var radius = 2

        svg.selectAll("g.circle")
                .data(dataNest)
               .enter()
                .append("g")
                .attr("class", "circle")
            .selectAll("circle")
            .data(function(g) {
                return g.values; })
                .enter()
                .append("circle")
            .attr("cx", function(g) {
                return x(g.year);
            })
            .attr("cy", function(g) {
                return y(g.pct);
            })
            .attr("r", function(d) {
              return 2 + (d.ff * Math.sqrt(radius));
            })
            .attr("fill", function(d) {
              if(d.champ == 1) {
                return "orange"
              }
              if(d.champ == 2) {
                return "red"
              }
              if(d.champ == 0) {
                return "black"
              }

            })


	}

    render() {
      return (
	    <div className= "svg-container">
            	<svg ref={node => this.noode = node}
	        	width={500} height={500}>
	        	</svg>
        </div>
      )}
}

export default Chart;