import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import PastWork from './routes/PastWork';


const App = () => {
  return (
    <Router>
      <div className="App" />
      <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/past-work" element={<PastWork />}/>
        </Routes>
    </Router>
  )
}

export default App
