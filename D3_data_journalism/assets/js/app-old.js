// @TODO: YOUR CODE HERE!
function updateData(sel, data) {
    sel.data(data);

    //Add missing circles
    sel
        .enter()
        .append("circle")
        .merge(sel)
        .attr("cx", function(d) {
            console.log(this);
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", d => 0.5*d.poverty)
        .attr("fill", "gray")

    //Remove extra circles
    sel.exit().remove()
}

d3.csv("assets/data/data.csv").then((data) => {
    console.table(data.slice(0,3))
    let smolData = data.slice(0,3);
    let svg = d3.select("#scatter").append("svg");
        svg
            .attr("width", "600")
            .attr("height", "400")

    let circles = svg.selectAll("circle");

    circles.data(smolData)
        .enter()
        .append("circle")
        .attr("cx", function(d) {
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", 10)
        .attr("fill", "gray")

    let lessSmolData = data.slice(5,15);

    console.table(lessSmolData);

    let sel = svg.selectAll("circle").data(lessSmolData);

    console.log(sel.data());

    sel
        .enter()
        .append("circle")
        .merge(sel)
        .attr("cx", function(d) {
            console.log(this);
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", d => 0.5*d.poverty)
        .attr("fill", "gray")

    sel.exit().remove()

    lessSmolData = data.slice(40,48);
    sel = svg.selectAll("circle");
    updateData(sel, lessSmolData);
})






var circlesGroup = updateToolTip(chosenYAxis, circlesGroup);

      // y axis labels event listener
      labelsGroup.selectAll("text")
        .on("click", function() {
          // get value of selection
          var value = d3.select(this).attr("value");
          if (value !== chosenYAxis) {
    
            // replaces chosenXAxis with value
            chosenYAxis = value;
            console.log(value, chosenYAxis);
    
            // console.log(chosenXAxis)
    
            // functions here found above csv import
            // updates x scale for new data
            yLinearScale = yScale(data, chosenYAxis);
    
            // updates x axis with transition
            yAxis = renderAxes(yLinearScale, yAxis);
    
            // updates circles with new x values
            circlesGroup = renderCircles(circlesGroup, yLinearScale, chosenYAxis);
    
            // updates tooltips with new info
            circlesGroup = updateToolTip(chosenYAxis, circlesGroup);
    
            // changes classes to change bold text
            if (chosenYAxis === "obese") {
              obeseLabel
                .classed("active", true)
                .classed("inactive", false);
              smokesLabel
                .classed("active", false)
                .classed("inactive", true);
              healthcareLabel
                .classed("active", false)
                .classed("inactive", true);  
            }
            else if (chosenYAxis === "smokes") {
              obeseLabel
                .classed("active", true)
                .classed("inactive", false);
              smokesLabel
                .classed("active", false)
                .classed("inactive", true);
              healthcareLabel
                .classed("active", false)
                .classed("inactive", true);
            }
            else (chosenYAxis === "healthcase") 
          }
        });