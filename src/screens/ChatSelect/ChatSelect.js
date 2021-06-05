import Chats from './Chats/Chats';
import Search from './Search/Search';

const ChatSelect = (props) => {
  return (
    <div className='h-full py-2'>
      <div className='p-2'>
        <Search users={props.users} select={props.selectUser} />
      </div>
      <div className='p-2'>
        <Chats rooms={props.chats} select={props.selectChat} />
      </div>
    </div>
  );
};

export default ChatSelect;
