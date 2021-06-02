import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Msger from '../containers/Msger';
import RoomSelect from '../screens/RoomSelect/RoomSelect';
import { Scrollbars } from 'react-custom-scrollbars-2';

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

const Layout = (props) => {
  return (
    <div className='flex flex-col justify-between h-full md:max-w-3xl m-auto' style={{ minHeight: 560 }}>
      <Header />  
      <CustomScrollbars className=''>
        <Msger />
      </CustomScrollbars>
      <Footer />
    </div>
  );
};

export default Layout;
