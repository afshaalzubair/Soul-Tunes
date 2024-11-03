import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {homePage} from './pages/homePage';
import './pages/matchPage';
import './pages/notFoundPage';

function App() {
  return(
    <Router>
        <Routes>
            <Route path="/" element= {<homePage/>}/>
            <Route path="/matchPage" element={<matchPage/>}/>
            <Route element={<notFoundPage/>}/>;;
        </Routes>
    </Router>
  );
}
export default App