import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Searchpage from './routes/Searchpage';


function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={
              <div className='app_page'>
                  <Sidebar/>
                  <Searchpage/>
              </div>
              
          }/>
          <Route path="/" element={     
              <div className='app_page'>
                  <Sidebar/>
                  <RecommendedVideos/>
              </div> 
          } />
          
       </Routes>
      </Router>

    
    </div>
  );
}

export default App;
