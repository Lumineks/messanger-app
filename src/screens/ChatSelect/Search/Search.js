import { useState, useRef } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import User from '../../../components/User/User';
import Scrollbar from '../../../components/Scrollbar/Scrollbar';

const Search = ({users, select}) => {
  const [isOpen, setIsOpen] = useState(false);
  const fadeRed = useRef(null);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  let usersList = <p>Нет доступных пользователей</p>;

  if (users.length) {
    usersList = users.map((user) => <User key={user.id} login={user.login} select={select} />);
  }

  return (
    <div>
      <button
        className='block w-full h-8 uppercase font-bold bg-gray-500 rounded-lg focus:outline-none border-none lg:hover:opacity-80  transition-opacity'
        type='button'
        onClick={openHandler}>
        Открыть список пользователей
      </button>
      <Modal
        aria-labelledby='Доступные пользователи для общения'
        aria-describedby='transition-modal-description'
        className='flex justify-center items-center py-8 px-4 max-w-lg m-auto'
        open={isOpen}
        onClose={closeHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
        ref={fadeRed}>
        <Fade in={isOpen}>
          <div className='h-5/6 flex flex-col bg-gray-700 w-full text-white p-2 rounded-lg'>
            <h2 className='mb-2 py-2 text-lg text-center'>Доступые пользователи</h2>
            <div className='h-full overflow-y-auto mb-4'>
              <Scrollbar>{usersList}</Scrollbar>
            </div>
            <button
              className='block w-full h-8 uppercase font-bold bg-gray-500 rounded-lg focus:outline-none border-none lg:hover:opacity-80  transition-opacity'
              type='button'
              onClick={closeHandler}>
              Закрыть
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Search;
