// *****Dept*****
// set the dimensions and margins of the graph
var margin = {top: 10, right: 0, bottom: 30, left: 100},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the dept_viz object to the body of the page
var dept_viz = d3.select("#dept")
  .append("svg")
    .attr("id", "dept_viz")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("./data/dept.csv", function(data) {


// Add X axis
var x = d3.scaleLinear()
.domain([84000, 106000])
.range([ 0, width]);
dept_viz.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))

// Y axis
var y = d3.scaleBand()
.range([ 0, height ])
.domain(data.map(function(d) { return d.Dept; }))
.padding(1);
dept_viz.append("g")
.call(d3.axisLeft(y))

// Lines
dept_viz.selectAll("myline")
.data(data)
.enter()
.append("line")
    .attr("x1", function(d) { return x(d.Female); })
    .attr("x2", function(d) { return x(d.Male); })
    .attr("y1", function(d) { return y(d.Dept); })
    .attr("y2", function(d) { return y(d.Dept); })
    .attr("stroke", "grey")
    .attr("stroke-width", "1px")

// Circles of variable 1
dept_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Female); })
    .attr("cy", function(d) { return y(d.Dept); })
    .attr("r", "6")
    .style("fill", "#69b3a2")
    .on("mouseover", mouseover_dept) // What to do when hovered
    .on("mousemove", mousemove_female_dept)
    .on("mouseleave", mouseleave_dept)

// Circles of variable 2
dept_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Male); })
    .attr("cy", function(d) { return y(d.Dept); })
    .attr("r", "6")
    .style("fill", "#4C4082")
    .on("mouseover", mouseover_dept) // What to do when hovered
    .on("mousemove", mousemove_male_dept)
    .on("mouseleave", mouseleave_dept)
})

// *****Job Title*****
// set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 100},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the job_viz object to the body of the page
var job_viz = d3.select("#job_title")
  .append("svg")
    .attr("id", "jobtitle_viz")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("./data/jobtitle.csv", function(data) {


// Add X axis
var x = d3.scaleLinear()
.domain([75000, 130000])
.range([ 0, width]);
job_viz.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))

// Y axis
var y = d3.scaleBand()
.range([ 0, height ])
.domain(data.map(function(d) { return d.JobTitle; }))
.padding(1);
job_viz.append("g")
.call(d3.axisLeft(y))

// Lines
job_viz.selectAll("myline")
.data(data)
.enter()
.append("line")
    .attr("x1", function(d) { return x(d.Female); })
    .attr("x2", function(d) { return x(d.Male); })
    .attr("y1", function(d) { return y(d.JobTitle); })
    .attr("y2", function(d) { return y(d.JobTitle); })
    .attr("stroke", "grey")
    .attr("stroke-width", "1px")

// Circles of variable 1
job_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Female); })
    .attr("cy", function(d) { return y(d.JobTitle); })
    .attr("r", "6")
    .style("fill", "#69b3a2")
    .on("mouseover", mouseover_job) // What to do when hovered
    .on("mousemove", mousemove_female_job)
    .on("mouseleave", mouseleave_job)

// Circles of variable 2
job_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Male); })
    .attr("cy", function(d) { return y(d.JobTitle); })
    .attr("r", "6")
    .style("fill", "#4C4082")
    .on("mouseover", mouseover_job) // What to do when hovered
    .on("mousemove", mousemove_male_job)
    .on("mouseleave", mouseleave_job)
})

// *****Education*****
// set the dimensions and margins of the graph
var margin = {top: 10, right: 100, bottom: 30, left: 100},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the job_viz object to the body of the page
var edu_viz = d3.select("#education")
  .append("svg")
    .attr("id", "education_viz")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("./data/education.csv", function(data) {


// Add X axis
var x = d3.scaleLinear()
.domain([84000, 106000])
.range([ 0, width]);
edu_viz.append("g")
.attr("transform", "translate(0," + height + ")")
.call(d3.axisBottom(x))

// Y axis
var y = d3.scaleBand()
.range([ 0, height ])
.domain(data.map(function(d) { return d.Education; }))
.padding(1);
edu_viz.append("g")
.call(d3.axisLeft(y))

// Lines
edu_viz.selectAll("myline")
.data(data)
.enter()
.append("line")
    .attr("x1", function(d) { return x(d.Female); })
    .attr("x2", function(d) { return x(d.Male); })
    .attr("y1", function(d) { return y(d.Education); })
    .attr("y2", function(d) { return y(d.Education); })
    .attr("stroke", "grey")
    .attr("stroke-width", "1px")

// Circles of variable 1
edu_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Female); })
    .attr("cy", function(d) { return y(d.Education); })
    .attr("r", "6")
    .style("fill", "#69b3a2")
    .on("mouseover", mouseover_edu) // What to do when hovered
    .on("mousemove", mousemove_female_edu)
    .on("mouseleave", mouseleave_edu)


// Circles of variable 2
edu_viz.selectAll("mycircle")
.data(data)
.enter()
.append("circle")
    .attr("cx", function(d) { return x(d.Male); })
    .attr("cy", function(d) { return y(d.Education); })
    .attr("r", "6")
    .style("fill", "#4C4082")
    .on("mouseover", mouseover_edu) // What to do when hovered
    .on("mousemove", mousemove_male_edu)
    .on("mouseleave", mouseleave_edu)
})

// create a tooltip
var Tooltip1 = d3.select("#dept")
.append("div")
.style("opacity", 0)
.attr("class", "tooltip")
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
.style("padding", "5px")
.style("position", "absolute")

var Tooltip2 = d3.select("#job_title")
.append("div")
.style("opacity", 0)
.attr("class", "tooltip")
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
.style("padding", "5px")
.style("position", "absolute")

var Tooltip3 = d3.select("#education")
.append("div")
.style("opacity", 0)
.attr("class", "tooltip")
.style("background-color", "white")
.style("border", "solid")
.style("border-width", "2px")
.style("border-radius", "5px")
.style("padding", "5px")
.style("position", "absolute")

// Three function that change the tooltip when user hover / move / leave a cell
var mouseover_dept = function(d) {
Tooltip1
  .style("opacity", 1)
}

var mousemove_female_dept = function(d) {
  console.log(this)
Tooltip1
  .html('<u>' + "Female" + '</u>' + "<br>" + d.Female)
  .style("left", (getOffset(this).left+20) + "px")
  .style("top", (getOffset(this).top) + "px")
}

var mousemove_male_dept = function(d) {
  Tooltip1
  .html('<u>' + "Male" + '</u>' + "<br>" + d.Male)
    .style("left", (getOffset(this).left+20) + "px")
    .style("top", (getOffset(this).top) + "px")
  }
var mouseleave_dept = function(d) {
Tooltip1
  .style("opacity", 0)
}

// Three function that change the tooltip when user hover / move / leave a cell
var mouseover_job = function(d) {
  Tooltip2
    .style("opacity", 1)
  }
  
  var mousemove_female_job = function(d) {
    // console.log(d3.mouse(d3.select('#job_title').node())[0]+20)
  Tooltip2
    .html('<u>' + "Female" + '</u>' + "<br>" + d.Female)
    .style("left", (getOffset(this).left+20) + "px")
    .style("top", (getOffset(this).top) + "px")
  }
  
  var mousemove_male_job = function(d) {
    Tooltip2
    .html('<u>' + "Male" + '</u>' + "<br>" + d.Male)
      .style("left", (getOffset(this).left+20) + "px")
      .style("top", (getOffset(this).top) + "px")
    }
  var mouseleave_job = function(d) {
  Tooltip2
    .style("opacity", 0)
  }

// Three function that change the tooltip when user hover / move / leave a cell
var mouseover_edu = function(d) {
  Tooltip3
    .style("opacity", 1)
  }
  
  var mousemove_female_edu = function(d) {
    console.log(this)
  Tooltip3
    .html('<u>' + "Female" + '</u>' + "<br>" + d.Female)
    .style("left", (getOffset(this).left+20) + "px")
    .style("top", (getOffset(this).top) + "px")
  }
  
  var mousemove_male_edu = function(d) {
    Tooltip3
    .html('<u>' + "Male" + '</u>' + "<br>" + d.Male)
      .style("left", (getOffset(this).left+20) + "px")
      .style("top", (getOffset(this).top) + "px")
    }
  var mouseleave_edu = function(d) {
  Tooltip3
    .style("opacity", 0)
  }

  function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }