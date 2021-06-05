import { useState } from 'react';
import Scrollbar from '../../components/Scrollbar/Scrollbar';
import Content from './Content/Content';
import Info from './Info/Info';

import './chat.css';
import Input from './Input/Input';

const Chat = ({ chat }) => {
  const [msgHistory, setMsgHistory] = useState([
    { login: 'Michail', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Denis', text: 'long message text' },
    { login: 'Michail', text: 'long message textlong message text' },
    { login: 'Michail', text: 'long message textlong message text' },
    { login: 'Denis', text: 'long message text' },
  ]);

  return (
    <div className='flex flex-col mb-auto chat'>
      <Info chat={chat} />
      <div className='flex flex-col-reverse overflow-auto h-full scroll'>
        <Content messages={msgHistory} />
      </div>
      <Input />
    </div>
  );
};

export default Chat;
