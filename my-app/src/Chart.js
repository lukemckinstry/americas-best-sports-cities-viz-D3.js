import React from 'react';
import * as d3 from 'd3';

class Chart extends React.Component{
	constructor(props){
    	super(props)
    	this.draw = this.draw.bind(this)
    }

    componentDidMount() {
    	if ( this.props.activation === true )  {
        	var dataset = this.props.data
        	var selected = this.props.selected 
        	var selectedLines = this.props.selectedLines
        	this.draw( dataset, selected, selectedLines );
      	}
      	if ( this.props.activation === false )  {
        	//this.remove();
    	}
    }

    componentDidUpdate(nextProps) { 
    	//console.log( "UPDATE TIME")
    	var dataset = this.props.data
        var selected = this.props.selected
        var selectedLines = this.props.selectedLines
        this.draw( dataset, selected, selectedLines );
    }

    draw( myData, selected, selectedLines ) {
    	console.log( "DRAW" );

    	//console.log("SELECTED LINES");
    	//console.log( selectedLines )
    	
    	var margin = {top: 10, right: 80, bottom: 45, left: 80},
	    width = 1200 - margin.left - margin.right,
	    height = 600 - margin.top - margin.bottom;

		// Set the ranges
		var x = d3.scaleLinear().range([0, width]);
		var y = d3.scaleLinear().range([height, 0]);

		var parseDate = d3.timeFormat("%Y").parse;

		// Define the axis
		// function make_x_axis() {
		//     return d3.axisBottom()
		//         .scale(x)
		//         .ticks(10);
		// }
		// function make_y_axis() {
		//     return d3.axisLeft()
		//         .scale(y)
		//         .ticks(10);
		// }

		//console.log( myData )
		//var myData = this.props.data;

		myData.forEach(function(d) {
		  d.year = +d.year;
		  d.pct = +d.pct;
		  d.city = d.city;
		  d.ff = d.ff;
		  d.champ = d.champ;
		  d.tooltip = d.tooltip;
		    });

		// Scale the range of the data
	    x.domain(d3.extent(myData, function(d) { return d.year; }));
	    y.domain([0, 1]);

	    // Nest the entries by city
	    var dataNest = d3.nest()
	        .key(function(d) {
	            return d.city;})
	        .entries(myData);
	    
	    const dataNestFilterCircles = dataNest.filter(word => selected.indexOf( word.key ) >= 0 );
	    const dataNestFilterLines = dataNest.filter(word => selectedLines.indexOf( word.key ) >= 0 );


		var xAxis = d3.axisBottom()
			.scale(x).ticks(10);      
		var yAxis = d3.axisLeft()
			.scale(y).ticks(10);

		// Define the line
		var PCTline = d3.line()
		    .x(function(d) { return x(d.year); })
		    .y(function(d) { return y(d.pct); });

		const noode = this.noode

		// Adds the svg canvas
		var svg = d3.select(noode)
		        .attr("width", width + margin.left + margin.right)
		        .attr("height", height + margin.top + margin.bottom)
		    .append("g")
		        .attr("transform",
		              "translate(" + margin.left + "," + margin.top + ")");

		//define div for the tooltip
		// var div = d3.select("svg-container").append("div")
		//     .attr("class", "tooltip")
		//     .style("opacity", 0);

		svg.selectAll("path").remove()
		svg.selectAll("g").remove()

		var opacityToggle = 1;

		dataNestFilterLines.forEach(function(d, i) {
	        svg.append("path")
	            .attr("class", "line")
	            .style("stroke", "black")
	            .attr("id", 'tag'+d.key.replace(/\s+/g, '')) // assign ID
	            .attr("d", PCTline(d.values))
	            .style('opacity', opacityToggle);

	        
	        var legendSpace = height/dataNestFilterCircles.length; // spacing for legend
	        
	        //remove old legend info
	        svg.selectAll("text.legend").remove()

	        console.log( d.key )
	        console.log( y(d.values[0]['pct']) )

	        // Add the Legend
	        svg.append("text")
	            .attr("x", 0 - margin.left/2)
	            .attr("y", y(d.values[0]['pct']))
	            .attr("class", "legend")
	            .style("fill", "black")
	            .on("click", function(){
	                // Determine if current line is visible
	                var active   = d.active ? false : true,
	                newOpacity = active ? 0 : 1;
	                // Hide or show the elements based on the ID
	                d3.select("#tag"+d.key.replace(/\s+/g, ''))
	                    .transition().duration(100)
	                    .style("opacity", newOpacity);
	                // Update whether or not the elements are active
	                d.active = active;
	                })
	            .text(d.key);
	        });

		//Add the grid
	    // svg.append("g")
	    //     .attr("class", "grid")
	    //     .attr("transform", "translate(0," + height + ")")
	    //     .call(make_x_axis()
	    //         .tickSize(-height, 0, 0)
	    //         .tickFormat("")
	    //     )

	    // svg.append("g")
	    //     .attr("class", "grid")
	    //     .call(make_y_axis()
	    //         .tickSize(-width, 0, 0)
	    //         .tickFormat("")
	    //     )

	    var radius = 2

        svg.selectAll("g.circle")
                .data(dataNestFilterCircles)
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
            .on("mouseover", function(d) {
	            console.log( d );
	            // div.transition()
	            //     .ease("elastic")
	            //     .duration(200)
	            //     .style("opacity", .9);
	            // div .html((d.city) + "<br/>"  + d.year + "<br/>" + "Championships: " + d.champ
	            //     + "<br/>" + "Top 4 Finishes: " + d.ff + "<br/>" + "Teams: " + d.tooltip )
	            //     .style("left", (d3.event.pageX) + "px")
	            //     .style("top", (d3.event.pageY - 28) + "px");
	             })
            .on("mouseout", function(d) {
                console.log( d );
                // div.transition()
                //     .ease("elastic")
                //     .duration(500)
                //     .style("opacity", 0);
            });

        // Add the X Axis
	    svg.append("g")
	        .attr("class", "x axis")
	        .attr("transform", "translate(0," + height + ")")
	        .call(xAxis)
	        .selectAll("text")
	            .style("text-anchor", "end")
	            .attr("dx", "-.8em")
	            .attr("dy", ".15em")
	            .attr("transform", function(d) {
	                return "rotate(-65)"
	                });

	    // Add the Y Axis
	    svg.append("g")
	        .attr("class", "y axis")
	        .attr("transform", "translate(" + width + ",0)")
	        .call(yAxis);

	        var padding = 100
	        svg.append("text")
	            .attr("text-anchor", "middle")
	            // this makes it easy to centre the text as the transform is applied to the anchor
	            .attr("transform", "translate("+ (width + margin.right - 7) +","+(60)+")rotate(-90)")// text is drawn off the screen top left, move down and out and rotate
	            .text("City Winning Percentage");

	        svg.append("text")
	            .attr("text-anchor", "middle")
	            // this makes it easy to centre the text as the transform is applied to the anchor
	            .attr("transform", "translate("+ (width - 23) +","+(height + margin.bottom)+")")
	            // centre below axis
	            .text("Season");


	}

    render() {
      return (
	    <div className= "svg-container" id="viz">
            	<svg ref={node => this.noode = node}
	        	width={1200} height={600}>
	        	</svg>
	        	
        </div>
      )}
}

export default Chart;