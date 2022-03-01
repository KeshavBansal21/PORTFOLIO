// import initialState from "../initialState.json";

  const initialState = {};

  export default function introReducer(state = initialState, action) {
    console.log(state);
    switch (action.type) {
      case "ADD_INTRO":
        return action.payload;
      case "UPDATE_INTRO":
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  }
