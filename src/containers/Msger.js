import { useState, useEffect, useContext } from 'react';
import ChatSelect from '../screens/ChatSelect/ChatSelect';
import { Route, Switch, Redirect } from 'react-router-dom';
import Chat from '../screens/Chat/Chat';
import Context from '../context/auth-context';
import Authentication from '../screens/Authentication/Authentication';

const Msger = (props) => {
  const authenticationContext = useContext(Context);

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
