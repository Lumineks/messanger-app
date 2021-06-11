import { useState, useEffect, useContext } from 'react';
import ChatSelect from '../screens/ChatSelect/ChatSelect';
import { Route, Switch, Redirect } from 'react-router-dom';
import Chat from '../screens/Chat/Chat';
import Context from '../context/auth-context';
import Authentication from '../screens/Authentication/Authentication';

import { HubConnectionBuilder } from '@microsoft/signalr';

const Msger = (props) => {
  const authenticationContext = useContext(Context);
  
  const [connection, setConnection] = useState(null);
  const [isHubConnected, setIsHubConnected] = useState(false);

  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:50001/SocketChatServerHub', {
        accessTokenFactory: () => authenticationContext.token,
      })
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  useEffect(() => {
    if (connection) {
      // connection.on('newMessage', (message) => {
        // console.log('new message has come and i am working on it');
        // console.log('messages in state: ', latestChat.current);

        // const updatedMessages = [...latestChat.current];
        // updatedMessages.unshift({
        //   login: message.login,
        //   text: message.text,
        //   messageTime: new Date(message.messageTime).toLocaleString()
        // });
        // console.log('updated messages after new msg: ', updatedMessages);
        // setMessages(updatedMessages);
      // });

      connection
        .start()
        .then((result) => {
          console.log('connected');
          setIsHubConnected(true);
        })
        .catch((error) => console.log('connection failed', error));
    }
  }, [connection]);


  const [users, setUsers] = useState([
    { id: 1, login: 'Michail' },
    { id: 2, login: 'Maria' },
    { id: 1, login: 'Denis' },
  ]);
  const [chats, setChats] = useState([
    { id: 1, login: 'Denis' },
    { id: 1, login: 'Michail' },
    { id: 2, login: 'Maria' },
  ]);

  const [activeUser, setActiveUser] = useState(null);
  const [activeChat, setActiveChat] = useState(null);

  const selectUserHandler = (login) => {
    setActiveUser(users.find((u) => u.login === login));
    setActiveChat(chats.find((c) => c.login === login));
  };

  const selectChatHandler = (login) => {
    setActiveChat(chats.find((c) => c.login === login));
  };

  return (
    <>
      {authenticationContext.isUserAuthorized ? (
        <>
          <Switch>
            <Route path='/chats' exact>
              <ChatSelect
                users={users}
                chats={chats}
                selectUser={selectUserHandler}
                selectChat={selectChatHandler}
              />
            </Route>

            <Route path='/chats/'>
              <Chat chat={activeChat} />
            </Route>

            <Route path='/'>
              <Redirect to='/chats' />
            </Route>
          </Switch>
        </>
      ) : (
        <>
          <Switch>
            <Route path='/login' component={Authentication} />

            <Route path='/'>
              <Redirect to='login' />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};

export default Msger;
