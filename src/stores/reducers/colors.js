
const initialState = {
    backgroundColor: "blue",
    textColor: "white"
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_BACKGROUND_COLOR": {
        const { color } = action.payload;
        return {
          ...state,
          backgroundColor: color
        };
      }
      case "CHANGE_TEXT_COLOR": {
        const { color } = action.payload;
        return {
          ...state,
          textColor: color
        };
      }
      default:
        return state;
    }
  }