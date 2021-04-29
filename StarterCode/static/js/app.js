

// Fetch the JSON data and console log it
 d3.json("samples.json").then(function (data) {
    console.log(data);
  });
  
  
// function unpack(rows, index) {
//     return rows.map(function(row) {
//       return row[index];
//     });
//   }
  

// function buildPlot() {
    d3.json("samples.json").then(data => {
        console.log(data.samples);
     
        var otu_id =  data.samples.otu_ids;
        var otu_label = data.samples.otu_labels;
        var otu_values = data.samples.sample_values;
        console.log(otu_label);

    }
//         var trace1 = {
//          type: 'bar',
//          x: unpack(data.metadata.samples, 0),
//          y: unpack(data.metadata.samples, 3),
//         //  text: []
//          name: 'Top 10 OTUs',  
//         }

//         var traceData = [trace1];
//         Plotly.plot('#bar', tracedata)
//     });
// }

// buildPlot();