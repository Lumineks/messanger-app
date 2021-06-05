const Input = (props) => {
  return (
    <form className='py-4 px-2 bg-gray-700 border-t-4 border-gray-600 flex items-center flex-wrap md:flex-nowrap'>
      <input className='h-8 w-full sm:w-3/5 px-4 mb-2 md:mb-0 md:mr-4 rounded-sm text-black' type='text' required placeholder='Напишите сообщение в этом поле' />
      <button className='w-full sm:w-2/5 border-2 border-white h-8 px-4 lg:hover:border-gray-600 lg:hover:text-white lg:hover:bg-gray-600 transition-colors rounded-sm' type='submit'>Отправить сообщение</button>
    </form>
  );
};

export default Input;
