import { useContext } from 'react';
import Context from './context/auth-context';

import './App.css';
import Layout from './Layout/Layout';



function App() {
  const authenticationContext = useContext(Context);
  return (
    <div className='App bg-gray-700 overflow-auto md:p-24 text-gray-100 scroll'>
      <Layout />
    </div>
  );
}

export default App;
