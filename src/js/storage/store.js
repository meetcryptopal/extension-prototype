import { encrypt, decrypt } from "./encryption";

const ROOT_KEY = "ROOT-KEY";

// TODO: Make this dynamic.
const PW = "cryptopal";

const store = window.chrome.storage.sync;

export const updateStore = (key, reducer, initState = {}) => action => {
  store.get(null, storedData => {
    // Decrypt.
    let state = decrypt(storedData[ROOT_KEY], PW);
    state = isEmptyState(state) ? {} : JSON.parse(state);

    // Reduce state.
    const currState = isEmptyState(state[key]) ? initState : state[key];
    const nextState = reducer(currState, action);
    state[key] = nextState; // WARNING: Mutation!!!
    console.log(key, state);

    // Encrypt.
    const encryptedNextState = encrypt(JSON.stringify(state), PW);

    // Update store.
    store.set({ [ROOT_KEY]: encryptedNextState });
  });
};

// Private
const isEmptyState = state => {
  return state == null || Object.keys(state).length <= 0;
};
