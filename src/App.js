import './App.css';
import {Routes, Route} from "react-router-dom"
import ListPersonnage from './component/ListPersonnage';
import Personnage from './component/Personnage';
import Starship from './component/Starship';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ListPersonnage />} />
        <Route path='/personnage/' element={<Personnage />} />
        <Route path='/starship/' element={<Starship />} />
      </Routes>
    </div>
  );
}

export default App;
