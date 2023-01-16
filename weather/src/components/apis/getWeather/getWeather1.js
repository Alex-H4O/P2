import OpenWeatherMap from "../../../utils/openMapApi/OpenMapApi";

export default (id) => OpenWeatherMap.get("/weather", { params: { id } });
