import { NavLink } from "react-router-dom";
import Avatar from "../Avatar/Avatar";

const User = ({login, select}) => {
  return (
    <NavLink className='flex justify-start border-b-2 border-gray-500 lg:hover:border-blue-500 transition-colors py-2 text-left cursor-pointer' to={`/chats/${login}`} onClick={()=>select(login)}>
      <Avatar login={login} />
      <div>
        <div className='font-medium text-lg'>{login}</div>
        <p className='text-sm'>Нажми для открытия чата</p>
      </div>
    </NavLink>
  );
}


export default User;