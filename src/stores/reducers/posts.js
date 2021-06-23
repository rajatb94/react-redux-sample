
const initialState = {
    posts: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action) {
    switch (action.type) {
      case "FETCH_POSTS_SUCCESS": {
        const { posts } = action.payload;
        return {
          ...state,
          posts: posts
          //posts (can just write this way too)
        };
      }
      case "ADD_POST": {
        const { post } = action.payload;
       
        return {
          ...state,
          posts: [...state.posts, post]
          //posts (can just write this way too)
        };
      }
      default:
        return state;
    }
  }

