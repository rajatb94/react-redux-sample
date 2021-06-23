
const initialState = {
    posts: [],
    color: "blue"
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
      case "CHANGE_COLOR": {
        const { color } = action.payload;
        return {
          ...state,
          color
        };
      }
      default:
        return state;
    }
  }