import { updateStore } from "../storage/store";

const STORE_KEY = "location";

const initState = { lat: null, lng: null };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case LOCATION:
      return { ...state, ...payload };
  }
};

const dispatch = updateStore(STORE_KEY, reduceState, initState);

// Actions
const LOCATION = "LOCATION";

const getCoordinates = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: longitude, latitude } = position;
      dispatch({
        type: LOCATION,
        payload: { lat: latitude, lng: longitude }
      });
    });
  } else {
    console.log("LOCATION UNAVAILABLE");
  }
};

export default {
  getCoordinates
};
