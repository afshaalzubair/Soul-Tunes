import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import {HomePage} from './pages/homePage';
import { MatchPage } from './pages/matchPage';
import { NotFoundPage } from './pages/notFoundPage';


const App = () => {
  return(
    <>
        <Router>
            <Routes>
                <Route path="/" element= {<HomePage/>}/>
                <Route path="/matchPage" element= {<MatchPage/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    </>
  );
};

export default App;