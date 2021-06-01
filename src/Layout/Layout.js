import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const Layout = (props) => {
  return (
    <div className='flex flex-col justify-between h-full'>
      <Header />
      <Footer />
    </div>
  );
}


export default Layout;