import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import {Lineups} from "./pages/Lineups"
import {VNavbar} from './components/navbar/VNavbar'
import {Homepage} from './pages/HomePage'
// import CrossHairs from "./pages/CrossHairs"
// import RecentMatches from './pages/RecentMatches'



const App = () => {
  return (
    <Router>
      <VNavbar/>
      <Routes>
        <Route path='/' exact element={<Homepage/>}/>
      </Routes>
    </Router>
  );
}
 
export default App;
