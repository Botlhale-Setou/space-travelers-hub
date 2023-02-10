import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../Redux/ConfigureStore';
import '@testing-library/jest-dom';
import Missions from '../pages/Missions';
import MissionsSlice, { updateMission } from '../Redux/Missions/MissionsSlice';

describe('Missions page', () => {
  test('renders correctly', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('updateMission', () => {
    it('should toggle the reserved property of the mission with the specified id', () => {
      const state = {
        missions: [
          {
            id: '1', name: 'MissionA', description: 'A mission', reserved: false,
          },
          {
            id: '2', name: 'MissionB', description: 'B mission', reserved: false,
          },
          {
            id: '3', name: 'MissionC', description: 'C mission', reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      };
      const action = {
        type: updateMission.type,
        payload: '2',
      };
      const expectedState = {
        missions: [
          {
            id: '1', name: 'MissionA', description: 'A mission', reserved: false,
          },
          {
            id: '2', name: 'MissionB', description: 'B mission', reserved: true,
          },
          {
            id: '3', name: 'MissionC', description: 'C mission', reserved: false,
          },
        ],
        status: 'succeeded',
        error: null,
      };
      const result = MissionsSlice.reducer(state, action);
      expect(result).toEqual(expectedState);
    });
  });
});
