const store = window.chrome.storage.sync;
const STORE_KEY = "location";

// Actions
const LOCATION = "LOCATION";

const initState = { lat: null, lng: null };
const reduceState = (state = initState, { type, payload }) => {
  switch (type) {
    case LOCATION:
      return { ...state, ...payload };
  }
};

const updateStore = action => {
  store.get(STORE_KEY, state => {
    const nextState = reduceState(state, action);

    store.set({ [STORE_KEY]: nextState });
    console.log(`${STORE_KEY}: `, nextState);
  });
};

const getCoordinates = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { coords: longitude, latitude } = position;
      updateStore({
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
