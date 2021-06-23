import { all } from "redux-saga/effects";

//public
import PostsSaga from "./posts";

export default function* rootSaga() {
  yield all([
    PostsSaga()
  ]);
}
