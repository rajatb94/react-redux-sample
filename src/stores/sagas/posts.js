import {
    call,
    put,
    takeEvery,
    takeLatest
} from 'redux-saga/effects'


// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchPosts(action) {
    console.log("Action: ", action)
    try {
        //const posts = yield call(axios.get());
        yield put({
            type: "FETCH_POSTS_SUCCESS",
            payload: {
                posts: [{
                        title: "saga1"
                    },
                    {
                        title: "saga1"
                    }
                ]
            }
        });
    } catch (e) {
        yield put({
            type: "USER_FETCH_FAILED",
            message: e.message
        });
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* PostsSaga() {
    yield takeEvery("FETCH_POSTS", fetchPosts);
}


export default PostsSaga;