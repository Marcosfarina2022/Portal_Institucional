import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Home />
      </div>
    </BrowserRouter>
  );
}

export default App;
