import { Link } from 'react-router-dom';
import {MdKeyboardBackspace} from 'react-icons/md'
import Avatar from '../../../components/Avatar/Avatar';

const Info = ({ chat }) => {
  return (
    <div className='flex items-center justify-between py-2 border-b-2 border-gray-500 bg-gray-700'>
      <Link to='/chats' className='flex items-center lg:hover:opacity-80 transition-opacity'><MdKeyboardBackspace size={36} /> Back to chats list</Link>
      <div className='flex items-center ml-2'>
        <div className='mx-2 font-bold text-xl'>{chat.login}</div>
        <Avatar login={chat.login} />
      </div>
    </div>
  );
};

export default Info;
