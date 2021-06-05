import Msg from './Msg/Msg';

const Content = ({ messages }) => {
  return (
    <div className='mt-auto flex flex-col-reverse'>
      {messages.map((msg) => (
        <Msg msg={msg} key={msg.login + msg.text + Math.random() * 100} />
      ))}
    </div>
  );
};

export default Content;
