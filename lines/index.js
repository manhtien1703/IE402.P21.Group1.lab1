import data from './data.js';

var template_line = {
    title: "{Name}",
    content: "{Location}",
}

const lines = data.map((line) => {
    return {
        type: "polyline",
        paths: line.paths,
        Name: line.Name,
        Location: line.Location,
        symbol: {
            type: "simple-line",
            color: line.symbol.color,
            width: 2,
        },
        popupTemplate: template_line,
    }
})

export default lines;