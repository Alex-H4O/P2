import axios from "axios";

const baseURL = "https://api.openweathermap.org/data/2.5";

const OpenWeatherMap = axios.create({
    baseURL,
});

const enrichRequestWithAppId = (config) => {
    config.params.appid = "e723d8dd29fffc587c539e9a37fd241d";

    return config;
};

const enrichRequestWithCelsiusUnits = (config) => {
    config.params.units = "metric";

    return config;
};

OpenWeatherMap.interceptors.request.use(enrichRequestWithAppId);
OpenWeatherMap.interceptors.request.use(enrichRequestWithCelsiusUnits);

export default OpenWeatherMap;
