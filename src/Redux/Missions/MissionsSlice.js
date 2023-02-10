/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

const fetchURL = 'https://api.spacexdata.com/v3/missions';

export const fetchMissionData = createAsyncThunk('spacetravelers/missions/fetch_data', async () => {
  const response = await axios.get(fetchURL);
  if (response.data) {
    return response.data;
  }
  return [];
});

const reArrangeMission = (missions) => {
  const newMissions = [];
  Object.entries(missions).forEach((mission) => {
    newMissions.push({
      id: mission[1].mission_id,
      name: mission[1].mission_name,
      description: mission[1].description,
      reserved: false,
    });
  });
  return newMissions;
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    updateMission(state, action) {
      return {
        ...state,
        missions: state.missions.map((mission) => (mission.id === action.payload
          ? { ...mission, reserved: !mission.reserved }
          : mission)),
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMissionData.pending, (state) => {
      state.status = 'loading';
    })
      .addCase(fetchMissionData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.missions = reArrangeMission(action.payload);
      })
      .addCase(fetchMissionData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { updateMission } = missionsSlice.actions;
export default missionsSlice;
