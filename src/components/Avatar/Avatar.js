const Avatar = ({ login }) => {
  return (
    <div
      className='w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white font-bold
     text-2xl mr-2'>
      {login? login[0] : null}
    </div>
  );
};

export default Avatar;
