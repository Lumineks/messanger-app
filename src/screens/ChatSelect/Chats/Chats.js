import User from "../../../components/User/User"

const Chats = ({rooms: chats, select}) => {
  let ChatsList = <p>Еще нет созданных чатов</p>

  if (chats.length) {
    ChatsList = chats.map(chat=><User key={chat.login} login={chat.login} select={select} />)
  }
  return (
    <div>
      {ChatsList}
    </div>
  );
}


export default Chats;