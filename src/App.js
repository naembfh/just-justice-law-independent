import logo from './logo.svg';
import './App.css';
import Header from './Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Servicedetail from './Pages/Servicedetail/Servicedetail';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        {/* <Route to='/home' element={<Home></Home>}></Route> */}
        <Route path='/service/:id' element={<Servicedetail></Servicedetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;
