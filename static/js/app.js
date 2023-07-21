const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("nav-toggle");
});

/*charts*/
const config = { responsive: true};
//bar
const barChartTrace1 = {
    x: ["jan", "feb", "mar", "apr", "may"],
    y: [20, 14, 23, 12, 8],
    name: "Job Bar Chart",
    type: "bar",
    marker: {
        color: "#ea335d",
    },

};

const barChartTrace2 = {
    x: ["jan", "feb", "mar", "apr", "may"],
    y: [20, 14, 23, 12, 8],
    name: "Job Bar Chart 2",
    type: "bar",
    marker: {
        color: "#ea335d",
        opacity: 0.6,
    },
};

const barChartData = [barChartTrace1, barChartTrace2];

const layout = {
    barmode: "stack",
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
    showlegend: false,
    margin: {
        l: 30,
        r: 30,
        b: 30,
        t: 30,
        pad: 1,
    },
    font: {
        color: "#6b6f8a"
    },
};

Plotly.newPlot("barChart", barChartData, layout, config);


// scientificChart
d3.csv(
    "http://raw.githubusercontent.com/plotly/datasets/master/finance-chart-apple.csv",
    function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "More Data Here",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.High"),
            line: { color: "#ea335d" },
        };

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: "Low Data Here",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.Low"),
            line: { color: "#03dcee" },
        };

        var data = [trace1, trace2];
        const layout = {
            paper_bgcolor: "#172042",
            plot_bgcolor: "#172042",
            showlegend: false,
            margin: {
                l: 30,
                r: 30,
                b: 30,
                t: 30,
                pad: 1,
            },
            font: { color: "#6b6f8a" },
            xaxis: {
                range: ["2016-07-01", "2017-02-01"],
                type: "date",
            },
            yaxis: {
                autorange: true,
                type: "linear",
            },
        };

        Plotly.newPlot("scientificChart", data, layout, config);
    });