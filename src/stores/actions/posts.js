
// export const fetchPosts = content => ({
//     type: "FETCH_POSTS_SUCCESS",
//     payload: {
//         posts: [
//             {title: "Post First"},
//             {title: "Post Two"}
//         ]
//     }
// });

export const fetchPosts = content => {
    return {
        type: "FETCH_POSTS"
    }
};

export const addPost = content => ({
    type: "ADD_POST",
    payload: {
        post: content.post
    }
});

