import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from "./Components/Home/Home"
import Destination from './Components/Destination/Destination'
import Spacelaunch from './Components/spacelaunch/Spacelaunch';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/destination" element={<Destination />}/>
          <Route exact path='/Spacelaunch' element={<Spacelaunch/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
