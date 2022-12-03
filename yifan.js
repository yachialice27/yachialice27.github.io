const svg = d3.select('#world_map').append('svg').attr("position", "relative").attr("width", '960px').attr("height", "500px");

svg.append("g")
  .attr("class", "legendLinear")
  .attr("transform", "translate(0,200)")


const projection = d3.geoNaturalEarth1();
const pathGenerator = d3.geoPath().projection(projection);

var Tooltip = d3.select("#world_map")
    .append("div")
    .style("position", "absolute")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")



d3.json("https://unpkg.com/world-atlas@1.1.4/world/110m.json", function(topoJSONdata){

  d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/110m.tsv', function(tsvData){
    const countryName = tsvData.reduce((accumulator, d) => {
    accumulator[d.iso_n3] = d.name;
    return accumulator;
  }, {});

  d3.csv("./data/employment_rate2.csv", function(csvData) {
    // let countryName_female_male = {}
    // for(var id in csvData){
    //   countryName_female_male[csvData['country']] = [csvData['female'], csvData['male']]
    // }

    const countryName_female_male = {}
    csvData.forEach(function(value, key){
      countryName_female_male[value['country']] = [value['female'], value['male']]
    })

    const name_female_male = {}
    console.log("countryName_female_male: ", countryName_female_male)

    for (const [key, value] of Object.entries(countryName)) {
      if (value in countryName_female_male){
        name_female_male[value] = countryName_female_male[value]
      } else{
        name_female_male[value] = [0, 0]
      }
    }

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      Tooltip
          .style("opacity", 1)
      d3.select(this)
          .style("stroke", "black")
          .style("opacity", 1)
    };
    const mousemove = function (d) {
      var male = parseFloat(name_female_male[countryName[d.id]][1]);
      var female = parseFloat(name_female_male[countryName[d.id]][0]);

      var ratio = 0
      if(male !== 0)
        ratio = female / male
      Tooltip
          .html("Country: " + countryName[d.id]
              + "</br> Ratio: " + ratio.toFixed(2)
              + "</br> Female: " + parseFloat(name_female_male[countryName[d.id]][0]).toFixed(2) + "\%"
              + "</br> Male: " + parseFloat(name_female_male[countryName[d.id]][1]).toFixed(2) + "\%")
          .style("left", (d3.mouse(this)[0]+100) + "px")
          .style("top", (d3.mouse(this)[1]+100) + "px")
    };
    const mouseleave = function (d) {
      Tooltip
          .style("opacity", 0)
      d3.select(this)
          .style("opacity", 1)
    };

    //Build color scale
    var myColor = d3.scaleLinear()
      // .range(["white", "#2E04FD"])
        .range(["white", "#0D014B"])
      .domain([1,0])

    var linear = d3.scaleLinear()
    .domain([1,0])
  // .range(["rgb(255, 255, 255)", "rgb(46, 4, 253)"]);
      .range(["rgb(255, 255, 255)", "rgb(13, 1, 75)"]);

    var legendLinear = d3.legendColor()
      .shapeWidth(40)
      .cells(10)
      .orient('vertical')
      .scale(linear);

    svg.select(".legendLinear")
      .call(legendLinear);


    const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);
    console.log(countries.features)
    svg.selectAll('path')
        .data(countries.features)
        .enter()
        .append("path")
        .attr('class', 'country')
        .attr("fill", "aquamarine")
        .attr("stroke", "dimgray")
        .attr('d', pathGenerator)
        .attr("fill", function(d){
          var male = parseFloat(name_female_male[countryName[d.id]][1]);
          var female = parseFloat(name_female_male[countryName[d.id]][0]);
          if (male === 0) return myColor(1);
          return myColor(female / male);
        })
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseleave", mouseleave)
        // .append("svg:title")
        // .text(function(d){ return countryName[d.id]})
  })
  })


});





