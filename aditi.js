import define1 from "./7a9e12f9fb3d8e06@459.js";
import define2 from "./2695158caff5fb0c@563.js";

function _1(md){return(
md`# U.S. State Choropleth

Women in STEM occupations by state, 2013. Data: [Status of Women Data](https://statusofwomendata.org/explore-the-data/employment-and-earnings/additional-state-data/stem/)`
)}

function _key(Legend,chart){return(
Legend(chart.scales.color, {title: "Women's share of all STEM workers (%)"})
)}

function _chart(UsStateChoropleth,employment,namemap,d3){return(
UsStateChoropleth(employment, {
  id: d => namemap.get(d.name),
  value: d => d.rate,
  scale: d3.scaleQuantize,
  domain: [24, 45],
  range: d3.schemeBlues[7],
  title: (f, d) => `${f.properties.name}\n${d?.rate}%`
})
)}

function _employment(FileAttachment){return(
FileAttachment("WomenInSTEM@5.csv").csv()
)}

function _5(md){return(
md`This dataset regrettably doesn’t include FIPS numeric identifiers for states; it only has state names. This map lets us look up the FIPS code for a state by name. If your data has FIPS identifiers, you should pass them directly as the _id_ option to the choropleth component; if your data has names, you can import this _namemap_ to look up the corresponding FIPS identifier as needed.`
)}

function _namemap(states){return(
new Map(states.features.map(d => [d.properties.name, d.id]))
)}

function _7(md){return(
md`The UsStateChoropleth component wraps the generic [D3 Choropleth](/@d3/choropleth) component to provide default arguments suitable for rendering a choropleth of U.S. states.`
)}

function _UsStateChoropleth(states,statemesh,Choropleth){return(
function UsStateChoropleth(data, {
  features = states,
  borders = statemesh,
  width = 975,
  height = 610,
  ...options
} = {}) {
  return Choropleth(data, {features, borders, width, height, ...options});
}
)}

function _9(howto){return(
howto("UsStateChoropleth")
)}

export default function define(runtime, observer) {
  const main = runtime.module();
  function toString() { return this.url; }
  const fileAttachments = new Map([
    ["WomenInSTEM@5.csv", {url: new URL("./files/40840ffe79bb2a6f7b8b00ec8e02c1a5e15f608bc551dce3061a28232ded428c23e0dee3ace86cd38d50386f3a82497410afb09575c44361236f1cc099b70db7.csv", import.meta.url), mimeType: "text/csv", toString}]
  ]);
  main.builtin("FileAttachment", runtime.fileAttachments(name => fileAttachments.get(name)));
  main.variable(observer()).define(["md"], _1);
  main.variable(observer("key")).define("key", ["Legend","chart"], _key);
  main.variable(observer("chart")).define("chart", ["UsStateChoropleth","employment","namemap","d3"], _chart);
  main.variable(observer("employment")).define("employment", ["FileAttachment"], _employment);
  main.variable(observer()).define(["md"], _5);
  main.variable(observer("namemap")).define("namemap", ["states"], _namemap);
  main.variable(observer()).define(["md"], _7);
  main.variable(observer("UsStateChoropleth")).define("UsStateChoropleth", ["states","statemesh","Choropleth"], _UsStateChoropleth);
  main.variable(observer()).define(["howto"], _9);
  const child1 = runtime.module(define1);
  main.import("howto", child1);
  const child2 = runtime.module(define2);
  main.import("us", child2);
  main.import("states", child2);
  main.import("statemesh", child2);
  main.import("Choropleth", child2);
  main.import("Legend", child2);
  return main;
}
