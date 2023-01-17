// import openMapApiForecast from "../../../utils/openMapApiForecast";
import OpenMapApi from '../../../utils/openMapApi/OpenMapApi';

export default (id) => OpenMapApi.get("/forecast", { params: { id } });
