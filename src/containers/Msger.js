import { useState, useEffect } from 'react';
import RoomSelect from '../screens/RoomSelect/RoomSelect';

const Msger = (props) => {
  const [users, setUsers] = useState([
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 2, login: 'Maria' }
  ]);
  const [rooms, setRooms] = useState([
    { id: 1, login: 'Denis' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 1, login: 'Michail' },
    { id: 2, login: 'Maria' }
  ]);

  return <RoomSelect users={users} rooms={rooms} />;
};

export default Msger;
