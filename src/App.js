import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import RecommendedVideos from './Components/RecommendedVideos';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Searchpage from './routes/Searchpage';
import Filter from './Components/Filter';


function App() {
  return (
    <div className="app">
      <Router>

        {/* header */}
        <Header />
        <div  className='app_page'>
          <Sidebar/>
          
          
          <Routes>
            <Route path="/search/:searchTerm" element={
                
                    <Searchpage/>
                
                
            }/>

            <Route path="/" element={     
                
                    <RecommendedVideos/>
                
            } />
            
            <Route path='/video/:id' element={""} />

        </Routes>
  
        </div>

        </Router>

    
    </div>
  );
}

export default App;
