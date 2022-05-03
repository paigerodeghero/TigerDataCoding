import { useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();

	const goToLogin = () => {
		navigate('/login-signup');
	};
	const goToHome = () => {
		navigate('/');
	};
	const goToCodebooks = () => {
		navigate('/codebooks');
	};
	const goToDatasets = () => {
		navigate('/datasets');
	};

	return (
		<div>
			{location.pathname === '/login-signup' ||
			location.pathname === '/reset-password' ? (
				<div></div>
			) : (
				<div className="bg-purple-light flex items-center py-2 px-4">
					<div className="flex items-center text-white text-xl font-semibold">
						<div
							className="flex items-center min-w-max hover:cursor-pointer"
							onClick={goToHome}
						>
							<img
								src={logo}
								className="object-scale-down h-12 object-center mx-auto"
							></img>
							<div className="p-4 min-w-max mr-8">TIGER DATA CODING TOOL</div>
						</div>

						<div className="space-x-4 flex items-center">
							<div
								className={`hover:underline hover:cursor-pointer ${
									location.pathname.includes('codebooks') ? 'nav-active' : ''
								}`}
								onClick={goToCodebooks}
							>
								CODEBOOKS
							</div>
							<div
								className={`hover:underline hover:cursor-pointer ${
									location.pathname.includes('datasets') ? 'nav-active' : ''
								}`}
								onClick={goToDatasets}
							>
								DATASETS
							</div>
						</div>
					</div>

					<div className="w-full flex justify-end items-center">
						<div
							className="text-white text-xl font-bold hover:underline hover:cursor-pointer"
							onClick={goToLogin}
						>
							LOGOUT
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default NavBar;
