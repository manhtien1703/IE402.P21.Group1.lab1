import data from './data.js';

var template_street = {
    title: "{Name}",
    content: "{Location}",
}

const streets = data.map((street) => {
    return {
        type: "polyline",
        paths: street.paths,
        Name: street.Name,
        Location: street.Location,
        symbol: {
            type: "simple-line",
            color: street.symbol.color,
            width: 2,
        },
        popupTemplate: template_street,
    }
})

export default streets;