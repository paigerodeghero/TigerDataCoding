import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import NavBar from './components/Navbar';
import LoginSignUp from './components/LoginSignup';
import ResetPassword from './components/ResetPassword';
import Home from './components/Home';
import Codebooks from './components/CodeBooks';
import Datasets from './components/Datasets';
import DatasetConfig from './components/DatasetConfig';
import DatasetDataPageOwner from './components/DatasetDataPageOwner';
import CodeBookDetails from './components/CodeBookDetails';

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<ScrollToTop />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login-signup" element={<LoginSignUp />} />
					<Route path="/reset-password" element={<ResetPassword />} />
					<Route path="/codebooks" element={<Codebooks />} />
					<Route path="/codebooks/:id" element={<CodeBookDetails />} />
					<Route path="/datasets" element={<Datasets />} />
					<Route path="/datasets/:id" element={<DatasetConfig />} />
					<Route
						path="/datasetdatapageowner"
						element={<DatasetDataPageOwner />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
