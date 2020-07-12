const dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];

const svgWidth = 500;
const svgHeight = 400;
const barPadding = 5;
const barWidth = svgWidth / dataset.length;

const svg = d3.select("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

const barChart = svg.selectAll("rect")
    .data(dataset)
    .enter()
    .append("rect")
    .attr("y", function(d) {
        return svgHeight - d;
    })
    .attr("height", function(d) {
        return d;
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i) {
        const translate = [barWidth*i, 0];
        return `translate(${translate})`;
    });