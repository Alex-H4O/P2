import openMapApiForecast from "../../../utils/openMapApiForecast";
// import OpenMapApi from '../../../utils/openMapApi/OpenMapApi';

export default (id) => openMapApiForecast.get("/forecast", { params: { id } });
