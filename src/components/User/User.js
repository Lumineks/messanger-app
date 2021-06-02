import Avatar from "../Avatar/Avatar";

const User = ({login}) => {
  return (
    <div className='flex justify-start border-b-2 border-gray-500 py-2 text-left'>
      <Avatar login={login} />
      <div>
        <div className='font-medium text-lg'>{login}</div>
        <p className='text-sm'>Нажми для открытия чата</p>
      </div>
    </div>
  );
}


export default User;