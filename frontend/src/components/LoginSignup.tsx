import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginSignUp() {
	const navigate = useNavigate();

	const goToResetPassword = () => {
		navigate('/reset-password');
	};
	const goToMain = () => {
		navigate('/');
	};

	const [isLogin, setIsLogin] = useState(true);

	return (
		<div className="h-screen mx-auto w-1/2 flex flex-col items-center justify-center">
			<img
				alt={'logo'}
				src={logo}
				className="object-scale-down h-40 w-full"
			></img>
			<span className="text-2xl font-light">TIGER DATA CODING TOOL</span>

			<div className="mt-5 bg-purple-light shadow-md rounded-lg text-left p-4 max-w-xl">
				<div className="flex flex-row p-4">
					<button
						className={`${
							isLogin ? 'btn-toggle-active' : 'btn-toggle'
						} rounded-l-md`}
						onClick={() => setIsLogin(true)}
					>
						LOGIN
					</button>
					<button
						className={`${
							isLogin ? 'btn-toggle' : 'btn-toggle-active'
						} rounded-r-md`}
						onClick={() => setIsLogin(false)}
					>
						SIGN UP
					</button>
				</div>

				{isLogin ? (
					<div className="py-4 px-8 space-y-2">
						<input
							type="text"
							placeholder="Email"
							className="input-login-signup"
						/>
						<input
							type="password"
							placeholder="Password"
							className="input-login-signup"
						/>
						<div className="flex justify-center">
							<button className="btn-1 mt-2" type="submit" onClick={goToMain}>
								LOGIN
							</button>
						</div>
						<div
							className="text-white text-sm hover:underline flex justify-center hover:cursor-pointer"
							onClick={goToResetPassword}
						>
							Forgot password?
						</div>
					</div>
				) : (
					<div className="py-4 px-8 space-y-2">
						<input
							type="text"
							placeholder="First Name"
							className="input-login-signup"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="input-login-signup"
						/>
						<input
							type="text"
							placeholder="Email"
							className="input-login-signup"
						/>
						<input
							type="text"
							placeholder="Role"
							className="input-login-signup"
						/>
						<input
							type="password"
							placeholder="Password"
							className="input-login-signup"
						/>
						<input
							type="password"
							placeholder="Confirm Password"
							className="input-login-signup"
						/>
						<div className="flex justify-center">
							<button className="btn-1 mt-2" type="submit">
								SIGN UP
							</button>
						</div>
					</div>
				)}
			</div>
		</div>
	);
}

export default LoginSignUp;
