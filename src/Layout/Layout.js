import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Msger from '../containers/Msger';
import RoomSelect from '../screens/RoomSelect/RoomSelect';

const Layout = (props) => {
  return (
    <div
      className='flex flex-col justify-between h-full md:max-w-3xl m-auto border-gray-600 border-4'
      style={{ minHeight: 560 }}>
      <Header />
      <Scrollbar>
        <Msger />
      </Scrollbar>
      <Footer />
    </div>
  );
};

export default Layout;
