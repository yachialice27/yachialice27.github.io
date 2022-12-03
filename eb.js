ebexcel = FileAttachment("eb-data@xlsx").xlsx()
headers = ebexcel.sheet(0, {headers: true})
Plot.plot({
    marks: [
      Plot.dot(headers, {x: "Women", y: "Men", fill: "Year"})
    ], 
    color: {
      legend: true, 
      label: "Year Gender Wage Gap Will Be Closed"
      }, 
    x: {
      label: "% Women Working Part Time"
    },
    y: {
      label: "% Men Working Part Time"
    },
  })