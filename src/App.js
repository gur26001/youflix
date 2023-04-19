import './App.css';
import Sidebar from '../src/Components/Sidebar';
import Header from '../src/Components/Header.js';
import RecommendedVideos from '../src/Components/RecommendedVideos.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Singlevideo from '../src/Components/Singlevideo.js';

function App() {
	return (
		<div className="app">
			<Router>
				{/* header */}
				<Header />
				<div className="app_p">
					<Routes>
						<Route
							path="/"
							element={
								<div className="app_page">
									<Sidebar />
									<RecommendedVideos />
								</div>
							}
						/>

						<Route path="/video/:id" element={<Singlevideo />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
