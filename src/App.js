import { useContext } from 'react';
import Context from './context/auth-context';
import { Scrollbars } from 'react-custom-scrollbars-2';
import './App.css';
import Layout from './Layout/Layout';

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: '#D1D5DB'
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars renderThumbHorizontal={renderThumb} renderThumbVertical={renderThumb} {...props} />
);

function App() {
  const authenticationContext = useContext(Context);
  return (
    <div className='App bg-gray-700 h-screen overflow-auto md:p-24 text-gray-100'>
      <CustomScrollbars className='w-10/12' autoHide autoHideTimeout={1500} autoHideDuration={400}>
        <Layout />
      </CustomScrollbars>
    </div>
  );
}

export default App;
