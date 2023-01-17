// import openMapApiForecast from "../../../utils/openMapApiForecast";
import OpenWeatherMap from '../../../utils/openMapApi/OpenMapApi';

export default (id) => OpenWeatherMap.get("/forecast", { params: { id } });
