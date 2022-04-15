import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Home() {
	const navigate = useNavigate();

	const goToLogin = () => {
		navigate('/login');
	}
	const goToSignup = () => {
		navigate('/signup');
	}

	return (
		<div className="min-h-screen text-gray-800 px-4">
			<div className="relative py-3 sm:max-w-xl mx-auto text-center">
				<img
					alt={'logo'}
					src={tiger}
					className="object-scale-down h-60 mb-3 object-center mx-auto"
				></img>
				<span className="text-2xl mt-3 font-bold"> WELCOME TO TIGER DATA CODING TOOL </span>
			</div>
			<div className="flex flex-row grid place-items-center p-4 v-screen">
				<button
					className="w-1/3 p-2 mt-4 text-white rounded-md bg-[#ED6430] shadow-2xl"
					type="button"
					onClick={goToLogin}
				>
					LOGIN
				</button>
				<button
					className="w-1/3 p-2 mt-4 text-white rounded-md bg-[#ED6430] shadow-2xl"
					type="button"
					onClick={goToSignup}
				>
					SIGNUP
				</button>
			</div>
		</div>
	);
}
export default Home;
