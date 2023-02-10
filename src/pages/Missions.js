import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { fetchMissionData, updateMission } from '../Redux/Missions/MissionsSlice';

function Missions() {
  const dispatch = useDispatch();
  const { missions, status, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length === 0) {
      dispatch(fetchMissionData());
    }
  }, [missions, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <Table striped bordered hover size="sm" className="tableMission">
      <thead>
        <tr>
          <th>
            Mission
          </th>
          <th>
            Description
          </th>
          <th className="enlargeCol">
            Status
          </th>
          <th className="enlargeCol">
            &nbsp;
          </th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.description}</td>
            <td className="text-middle text-center">
              <badge
                className={item.reserved ? 'yReserve' : 'nReserve'}
              >
                {item.reserved ? 'Active Member' : 'Not A Member'}
              </badge>
            </td>
            <td className="text-middle text-center">
              <Button
                variant={item.reserved ? 'outline-danger' : 'outline-primary'}
                type="button"
                className={item.reserved ? 'yReserve2' : 'nReserve2'}
                onClick={() => { dispatch(updateMission(item.id)); }}
              >
                {item.reserved ? 'Leave Mission' : 'Join Mission'}
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Missions;
