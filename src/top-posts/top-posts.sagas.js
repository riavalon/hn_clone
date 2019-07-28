import { put, takeLatest, fork, call } from "redux-saga/effects";

import { POSTS } from './top-posts.actions';
import { fetchTopPosts } from '../utils/http';

export function* fetchPosts() {
  try {
    const data = yield call(fetchTopPosts);
    yield put(POSTS.success(data));
  } catch (e) {
    yield put(POSTS.failure(e));
  }
}

export function* watchFetchPosts() {
  yield takeLatest(POSTS.trigger, fetchPosts);
}

export default function* topPostsSagas() {
  yield fork(watchFetchPosts);
}