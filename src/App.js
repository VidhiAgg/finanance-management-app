import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import {Income} from './features/Income';
import {Expenses} from './features/Expenses';

import {Savings} from './features/Savings';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/income' element={<Income />}></Route>
        <Route path='/expenses' element={<Expenses/>}></Route>
        <Route path='/savings' element={<Savings />}></Route>
        <Route path='/income' element={<Income />}></Route>


      </Routes>
   
    </div>
  );
}

export default App;
