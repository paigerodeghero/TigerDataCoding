import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function ResetPassword() {
	const navigate = useNavigate();

	const goToLogin = () => {
		navigate('/login-signup');
	};
	return (
		<div className="h-screen mx-auto w-1/2 flex flex-col items-center justify-center">
			<img
				alt="logo"
				src={tiger}
				className="object-scale-down h-40 w-full"
			></img>
			<span className="text-2xl font-light">TIGER DATA CODING TOOL</span>

			<div className="mt-5 bg-purple-light shadow-md sm:rounded-lg text-left">
				<div className="py-5 px-12 space-y-2">
					<span className="text-white text-xl font-bold">
						RESET YOUR PASSWORD
					</span>
					<input
						type="text"
						placeholder="Email"
						className="border w-full h-5 px-3 py-5 mt-5 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md"
					/>
					<div className="grid place-items-center v-screen">
						<button className="btn-1 mt-2" type="submit">
							SUBMIT
						</button>
					</div>
					<div
						className="text-sm hover:underline grid place-items-center v-screen text-white mt-2 hover:cursor-pointer"
						onClick={goToLogin}
					>
						Back to Login
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResetPassword;
