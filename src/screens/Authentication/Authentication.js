import { useState, useContext, useRef } from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Context from '../../context/auth-context';

const Authentication = (props) => {
  const authenticationContext = useContext(Context);
  const [isLogin, setIsLogin] = useState(true);

  const loginRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();

  const switchHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = () => {};

  return (
    <div className='mt-4 mb-4 lg:mt-16 lg:mb-16'>
      <div className='flex flex-col justify-center items-center space-x-4 mb-4'>
        <p className='text-3xl font-bold mb-2'>{isLogin ? 'Авторизация' : 'Регистрация'}</p>
        <div>
          <span></span>
          <FormControlLabel
            control={<Switch checked={!isLogin} onChange={switchHandler} color='primary' />}
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
          <input className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2' id='login' type='text' required />
        </div>
        <div className='mb-4'>
          <label className='block mb-2' htmlFor='password'>
            Пароль
          </label>
          <input className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2' id='password' type='password' required />
        </div>
        {!isLogin ? (
          <div className='mb-4'>
            <label className='block mb-2' htmlFor='email'>
              Email адрес
            </label>
            <input className='w-60 bg-transparent border-2 border-gray-500 text-white outline-none p-2' id='email' type='email' required />
          </div>
        ) : null}
        <button className='w-60 mt-4 border-2 border-gray-500 py-2 px-4 lg:hover:border-gray-600 lg:hover:text-white lg:hover:bg-gray-600 transition-colors rounded-lg'>{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
      </form>
    </div>
  );
};

export default Authentication;
