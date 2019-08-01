import { combineReducers } from 'redux';

import collectionReducer from './collection-reducer';
import controlsReducer from './controls-reducer';

const reducers = combineReducers({
  scene: collectionReducer,
  controls: controlsReducer
});

export default reducers;