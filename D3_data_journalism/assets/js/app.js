// @TODO: YOUR CODE HERE!
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
        .append("circle")
        .attr("cx", function(d) {
            console.log(this);
            return d.poverty*10
        })
        .attr("cy", 50)
        .attr("r", 10)
        .attr("fill", "gray")

    sel.exit().remove()
})