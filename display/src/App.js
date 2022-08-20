import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {Lineups} from "./pages/Lineups"
import {VNavbar} from './components/navbar/VNavbar'
import {Homepage} from './pages/HomePage'
import CrossHairs from "./pages/CrossHairs"
import RecentMatches from './pages/RecentMatches'



const App = () => {
  return (
    <Router>
      <VNavbar/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
        <Route path='/recent_matches' exact element={<RecentMatches/>}/>
        <Route path='/lineups' exact element={<Lineups/>}/>
        <Route path='/crosshairs' exact element={<CrossHairs/>}/>
      </Routes>
    </Router>
  );
}
 
export default App;
