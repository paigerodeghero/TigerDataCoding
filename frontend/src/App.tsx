import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Login from './components/Login';
import Signup from './components/Signup';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';

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

						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</Router>
		</div>
	);
}

export default App;
