import data from './data.js';

var template_place = {
    title: "{Name}",
    content: "{Content}",
}


const places = data.map((place) => {
    return {
        type: "point",
        longitude: place.longitude,
        latitude: place.latitude,
        Name: place.Name,
        Content: place.Content,
        symbol: {
            type: "picture-marker",
            url: place.symbolURL,
            width: "40px",
            height: "40px",
        },
        popupTemplate: template_place,
    }
});

export default places;