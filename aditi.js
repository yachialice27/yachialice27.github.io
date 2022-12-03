chart = UsStateChoropleth(employment, {
    id: d => namemap.get(d.name),
    value: d => d.rate,
    scale: d3.scaleQuantize,
    domain: [24, 45],
    range: d3.schemeBlues[7],
    title: (f, d) => `${f.properties.name}\n${d?.rate}%`
  })

  employment = FileAttachment("WomenInSTEM@5.csv").csv()
  namemap = new Map(states.features.map(d => [d.properties.name, d.id]))
  
function UsStateChoropleth(data, {
    features = states,
    borders = statemesh,
    width = 975,
    height = 610,
    ...options
} = {}) {
    return Choropleth(data, {features, borders, width, height, ...options});
}

  import {howto} from "@d3/example-components"
  import {us, states, statemesh, Choropleth, Legend} from "@d3/choropleth"
