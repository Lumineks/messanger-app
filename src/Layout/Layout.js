import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Scrollbar from '../components/Scrollbar/Scrollbar';
import Msger from '../containers/Msger';

const Layout = (props) => {
  return (
    <div
      className='flex flex-col h-full justify-between md:max-w-3xl m-auto border-gray-600 border-4'>
      <Header />

      <Msger />

      <Footer />
    </div>
  );
};

export default Layout;
