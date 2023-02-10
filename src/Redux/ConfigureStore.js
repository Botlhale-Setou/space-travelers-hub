import { combineReducers, configureStore } from '@reduxjs/toolkit';
import rocketsSlice from './Rockets/RocketsSlice';
import missionsSlice from './Missions/MissionsSlice';

const reducer = combineReducers({
  rockets: rocketsSlice,
  missions: missionsSlice.reducer,
});

const store = configureStore({
  reducer,
});

export default store;