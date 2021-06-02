import Rooms from './Rooms/Rooms';
import Search from './Search/Search';

const RoomSelect = (props) => {
  return (
    <div className='h-full py-2'>
      <div className='p-2'>
        <Search users={props.users} />
      </div>
      <div className='p-2'>
        <Rooms rooms={props.rooms} />
      </div>
    </div>
  );
};

export default RoomSelect;
