import TPBacKan from "./TPBacKan.js";
import HuyenChoMoi from "./HuyenChoMoi.js";
import HuyenChoDon from "./HuyenChoDon.js";
import HuyenBachThong from "./HuyenBachThong.js";
import HuyenNganSon from "./HuyenNganSon.js";
import HuyenBaBe from "./HuyenBaBe.js";
import HuyenNaRi from "./HuyenNaRi.js";
import HuyenPacNam from "./HuyenPacNam.js";

var template_district = {
    title: "{Name}",
    content: "{Name} - {Location} có diện tích {Area} km²",
};

const districts = [
    TPBacKan,
    HuyenChoMoi,
    HuyenChoDon,
    HuyenBachThong,
    HuyenNganSon,
    HuyenBaBe,
    HuyenNaRi,
    HuyenPacNam
].map(data => ({
    type: "polygon",
    symbol: {
        type: "simple-fill",
        color: data.symbol.color,
        outline: {
            color: [67, 66, 66, 1],
            width: 1
        }
    },
    Name: data.Name,
    Location: data.Location,
    Area: data.Area,
    rings: data.rings,
    popupTemplate: template_district,
}));

export default districts;
