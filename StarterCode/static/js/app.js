

// Fetch the JSON data and console log it
 d3.json("samples.json").then(function (data) {
    console.log(data);
  });
  
  
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
  


function buildPlot() {
    d3.json("samples.json").then(data => {
        console.log(data.metadata);
        console.log(data.metadata.samples);

        var trace1 = {
         type: 'bar'
         x: []
         y:[]
         text: []
         name: Top 10 OTUs  
        }




    });
}

buildPlot();