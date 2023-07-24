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
let url = "https://raw.githubusercontent.com/alphatest722/testdata/90f5aab7619d100321626c78b18f735f715c1ac3/finance-charts-apple2.csv";
let promise = d3.csv(url)
console.log(promise)

d3.csv(url, function (err, rows) {
        function unpack(rows, key) {
            return rows.map(function (row) {
                return row[key];
            });
        }

        var trace1 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL High",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.High"),
            line: { color: "#ea335d" },
        };

        var trace2 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL Low",
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

const pieChartData = [
    {
        values: [19, 26, 55],
        labels: ["march", "april", "june"],
        type: "pie"
    },
];

const pieChartLayout = {
    paper_bgcolor: "#172042",
    plot_bgcolor: "#172042",
    piecolorway: ["#ea335d", "#03dcee", "#178add"],
    showlegend: false,
    margin: {
        l: 10,
        r: 10,
        b: 10,
        t: 10,
        pad: 1,
    },
    height: 300,
    wiedth: 300,
};

Plotly.newPlot("pieChart", pieChartData, pieChartLayout);

const donutChartData = [
    {
        values: [10, 40, 50],
        labels: ["sep", "oct", "nov"],
        hole: 0.4,
        type: "pie",
    },
];

Plotly.newPlot("donutChart", donutChartData, pieChartLayout);