import { useContext } from 'react';
import Context from '../../../../context/auth-context';

const Msg = ({ msg }) => {
  const authenticationContext = useContext(Context);
  
  return (
    <div className={`${msg.login === authenticationContext.userName ? 'ml-auto' : ''} bg-gray-600 rounded-lg w-9/12 text-left p-2 m-2`}>
      <div className='font-bold text-lg'>{ msg.login }</div>
      <p className='text-base'>{ msg.text }</p>
    </div>
  );
}


export default Msg;