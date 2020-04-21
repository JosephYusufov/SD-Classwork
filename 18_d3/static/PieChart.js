fetch("https://data.cityofnewyork.us/api/views/ihfw-zy9j/rows.json?accessType=DOWNLOAD")
    .then(response => {
        return response.json();
    }).then((data) => {
        process(data);
    });
var width = 500;
var height = 500;

const process = (data) => {
    // const p = d3.selectAll("p");
    // console.log(p);
    // console.log(data);

    // HELPER FUNCTIONS
    const getByYear = (schoolYear) => data.data.filter(datum => datum[10] == schoolYear)

    const getPercentageByRace = (race, data) => {
        const raceIndex = (raceParam => ({
                'a': 35,
                'b': 37,
                'h': 39,
                'w': 41
        }[raceParam]))(race);
        return d3.mean(data.map((d => d[raceIndex])));
    }

    const getRaceSummary = (data) => {
        const summary = {    
            asian: getPercentageByRace('a', data),
            black: getPercentageByRace('b', data),
            hispanic: getPercentageByRace('h', data),
            white: getPercentageByRace('w', data),
        } 
        summary['sum'] = d3.sum(Object.values(summary));
        return summary;
    };

    console.log(getRaceSummary(getByYear('20102011')));
    // console.log(getPercentageByRace('w', getByYear('20052006')))
    // console.log();
//     const pie = d3.pie()
//         .sort(null)
//         .value(d => d.value);

//     const arcLabel = () => {
//         const radius = math.min(width, height) / 2 * 0.8;
//         return d3.arc().innerRadius(radius).outerRadius(radius);
//     };

//     const arc = d3.arc()
//         .innerRadius(0)
//         .outerRadius(Math.min(width, height) / 2 - 1);

//     const color = d3.scaleOrdinal()
//         .domain(data.map(d => d.name))
//         .range(d3.quantize(t => d3.interpolateSpectral(t * 0.8 + 0.1), data.length).reverse());
};



// d3.json('https://data.cityofnewyork.us/api/views/ihfw-zy9j/rows.json?accessType=DOWNLOAD', 
//     data => process(data));

