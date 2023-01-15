import OpenMapApi from "../../../utils/openMapApi/OpenMapApi";

export default (ids) => OpenMapApi.get("/group",
{
    params: {
        id: ids.join(","),
    },
});
