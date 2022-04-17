import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Servicedetail from './Pages/Servicedetail/Servicedetail';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './RequireAuth/RequireAuth';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Notfound from './Shared/Notfound/Notfound';



function App() {
  return (
    < >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route to='/home' element={<Home></Home>}></Route> */}
        {/* <Route path='/service/:id' element={<Servicedetail></Servicedetail>}></Route> */}
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<Notfound></Notfound>}></Route>

      </Routes>
    </>
  );
}

export default App;
