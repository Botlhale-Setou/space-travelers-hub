import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup, Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';

function MyProfile() {
  const { missions } = useSelector((state) => state.missions);
  const reservedMissions = missions.filter((item) => item.reserved === true);

  const rockets = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((item) => item.reserved === true);

  if (reservedMissions.length === 0 && reservedRockets.length === 0) {
    return <div>No reserved rockets/missions</div>;
  }

  return (
    <Container className="profileData">
      <Col xs={6} md={4}>
        <ListGroup as="ul">
          <h2>My Missions</h2>
          {reservedMissions.map((item) => (
            <ListGroup.Item as="li" key={item.id}>{item.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col xs={6} md={4}>
        <ListGroup as="ul">
          <h2>My Rockets</h2>
          {reservedRockets.map((rocket) => (
            <ListGroup.Item as="li" key={rocket.id}>{rocket.name}</ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Container>
  );
}

export default MyProfile;
