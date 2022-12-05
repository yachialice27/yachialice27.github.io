function UsStateChoropleth(data, {
    features = d3.states,
    borders = d3.statemesh,
    width = 975,
    height = 610,
    ...options
  } = {}) {
    return d3.Choropleth(data, {features, borders, width, height, ...options});
  }

namemap = new Map(d3.states.features.map(d => [d.properties.name, d.id]))
console.log(namemap)

employment = d3.csv("./data/WomenInSTEM@5.csv")

chart = UsStateChoropleth(employment, {
id: d => namemap.get(d.name),
value: d => d.rate,
scale: d3.scaleQuantize,
domain: [24, 45],
range: d3.schemeBlues[7],
title: (f, d) => `${f.properties.name}\n${d?.rate}%`
})

var margin = {top: 10, right: 0, bottom: 30, left: 100},
    width = 900 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// append the dept_viz object to the body of the page
d3.select("#women_in_stem").append(chart).attr("id", "women_in_stem_viz").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom)
