import { useState, useContext, useRef } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Context from '../../context/auth-context';
import axios from 'axios';

import './Loader.css';

const Authentication = (props) => {
  const authenticationContext = useContext(Context);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isSending, setIsSending] = useState(false);

  const loginRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const switchHandler = () => {
    setIsLoginMode((prevState) => !prevState);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const login = loginRef.current.value;
    const password = passwordRef.current.value;

    let endpoint = '';
    const user = { login: login, pass: password };

    if (isLoginMode) {
      endpoint = 'https://localhost:5001/api/User/userLoginEndpoint';
    } else {
      endpoint = 'https://localhost:5001/api/User/userRegisterEndPoint';
      const email = emailRef.current.value;
      user.email = email;
    }

    setIsSending(true);
    axios
      .post(endpoint, user)
      .then((response) => {
        console.log(response);
        authenticationContext.login(response.data, login);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='mt-4 mb-4 lg:mt-16 lg:mb-16 auth'>
      <div className='flex flex-col justify-center items-center space-x-4 mb-4'>
        <p className='text-3xl font-bold mb-2'>{isLoginMode ? 'Авторизация' : 'Регистрация'}</p>
        <div>
          <span></span>
          <FormControlLabel
            control={<Switch checked={!isLoginMode} onChange={switchHandler} color='primary' />}
            label='Изменить режим'
            labelPlacement='start'
          />
        </div>
      </div>
      <form onSubmit={submitHandler}>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='login'>
            Логин
          </label>
          <input
            className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2'
            id='login'
            type='text'
            ref={loginRef}
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='password'>
            Пароль
          </label>
          <input
            className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2'
            id='password'
            type='password'
            ref={passwordRef}
            required
          />
        </div>
        {!isLoginMode ? (
          <div className='mb-4'>
            <label className='block mb-2' htmlFor='email'>
              Email адрес
            </label>
            <input
              className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2'
              id='email'
              type='email'
              ref={emailRef}
              required
            />
          </div>
        ) : null}
        {!isSending ? (
          <button className='w-60 mt-4 border-2 border-gray-500 py-2 px-4 lg:hover:border-gray-600 lg:hover:text-white lg:hover:bg-gray-600 transition-colors rounded-lg'>
            {isLoginMode ? 'Войти' : 'Зарегистрироваться'}
          </button>
        ) : (
          <div className='spinner'>
            <div className='spinner-item'></div>
            <div className='spinner-item'></div>
            <div className='spinner-item'></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Authentication;
