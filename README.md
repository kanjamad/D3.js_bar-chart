
Scales: using scales for our data. 

### So what are the scales?

Scales are functions which will transform your data by either increasing or decreasing their values for better visualizations.
* What if you update the data set and introduce much smarter values. So our bars are hardly visible now. This is because the values which we are using as much smaller. In the scenarios like these we can make use of the scales.
##  scaleLinear() method:
```
var yScale = d3.scaleLinear()  
    .domain([0, d3.max(dataset)])  
    .range([0, svgHeight]);
```
*  .domain():  Take an array as an argument. This array contains two elements.
First one is 0 and another one is the maximum number in our data set.

*  d3.max() : To calculate this number 
*  .range() : which will keep the scale values inside the range of our SVG container.
It also takes an array offering the first element is 0 and the second element is the height of our SVG container.

* Finally pass the values of our Y coordinate and the height of the rectangle using a Y-scale method.
```
    .attr('y', (d) => svgHeight - yScale(d))
	.attr('height', (d) => yScale(d))

```


```
 // javascript
//let dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

let dataset = [1,2,3,4,5];

let svgWidth = 500, svgHeight = 300, barPadding = 5;
let barWidth = (svgWidth / dataset.length);


let svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);
    
// scaleLinear() method 
let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight]);
        
let barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
	.attr('y', (d) => svgHeight - yScale(d))
	.attr('height', (d) => yScale(d))
	.attr('width', barWidth - barPadding)
	.attr('transform', (d, i) => {
		let translate = [barWidth * i, 0];
		return 'translate(' + translate + ')';
	});

```
