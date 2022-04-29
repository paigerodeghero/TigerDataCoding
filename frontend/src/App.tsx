import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import Main from './components/Main';
import Codebooks from './components/CodeBook';
import Datasets from './components/DatasetsPage';

function App() {
	return (
		<div className="App">
			<Router>
				{/* <NavBar /> */}
				<div id="wrapper-content">
					<ScrollToTop />
					<Routes>
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route path="/reset-password" element={<ResetPassword />} />
						<Route path="/main" element={<Main />} />
						<Route path="/Codebooks" element={<Codebooks />} />
						<Route path="/Datasets" element={<Datasets />} />

						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
