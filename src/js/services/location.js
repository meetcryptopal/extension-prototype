import store from "store";
import allPlugins from "store/plugins/all";

store.addPlugin(allPlugins);

const STORE_KEY = "location";

const initStore = () => {
  store.defaults({ [STORE_KEY]: { latitude: null, longitude: null } });
};

const getCoordinates = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: longitude, latitude } = position;
      initStore();
      store.update(STORE_KEY, location => {
        location.longitude = longitude;
        location.latitude = latitude;
      });
      console.log("LONGITUDE: ", longitude);
      console.log("LATITUDE: ", latitude);
    });
  } else {
    console.log("LOCATION UNAVAILABLE");
  }
};

export default {
  getCoordinates
};
