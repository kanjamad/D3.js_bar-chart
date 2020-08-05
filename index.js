let dataset = [80, 100, 56, 120, 180, 30, 120, 160];

let svgWidth = 500,
	svgHeight = 300,
	barPadding = 5;
let barWidth = svgWidth / dataset.length;

let svg = d3.select('svg').attr('width', svgWidth).attr('height', svgHeight);

let barChart = svg
	.selectAll('rect')
	.data(dataset)
	.enter()
	.append('rect')
	.attr('y', (d) => svgHeight - d)
	.attr('height', (d) => d)
	.attr('width', barWidth - barPadding)
	.attr('transform', (d, i) => {
		let translate = [barWidth * i, 0];
		return 'translate(' + translate + ')';
	});

let text = svg
	.selectAll('text')
	.data(dataset)
	.enter()
	.append('text')
	.text((d) => d)
	.attr('y', (d, i) => svgHeight - d - 2)
	.attr('x', (d, i) => barWidth * i)
	.attr('fill', '#eb7c7c');
