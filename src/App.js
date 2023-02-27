import './App.css';
import { Routes, Route } from 'react-router-dom';
import Pokedex from './components/Pokedex';
import SignInComponent from './components/SignInComponent';
import PageNotFoundComponent from './components/PageNotFoundComponent';
import SignIn from './components/SignIn';

function App() {

  return (
    <div className="App">
      <div>
        <Routes>
          <Route path='/' element={<SignIn />} />
          <Route path='/home' element={<SignInComponent />} />
          <Route path='/pokedex' element={<Pokedex/>} />
          <Route path='*' element={<PageNotFoundComponent />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;