import User from "../../../components/User/User"

const Rooms = (props) => {
  let roomsList = <p>Еще нет созданных чатов</p>

  if (props.rooms.length) {
    roomsList = props.rooms.map(room=><User key={room.login} login={room.login} />)
  }
  return (
    <div>
      {roomsList}
    </div>
  );
}


export default Rooms;