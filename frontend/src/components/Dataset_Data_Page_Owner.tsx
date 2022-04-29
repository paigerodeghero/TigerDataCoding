import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function DatasetsPage() {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate('/main');
	}

	const goToCodebooks = () => {
		navigate('/Codebooks');
	}
	const goToDatasets = () => {
		navigate('/Datasets');
	}

	return (
		<div>
			<nav className="flex items-center justify-between flex-wrap bg-[#76589C] p-6">
				<a href="#" onClick={goToHome}>
					<div className="flex items-center flex-shrink-0 text-white mr-6">
						<img
							src={tiger}
							width="54"
							height="54"
							className="object-contain"></img>
						<span className="font-semibold text-xl tracking-tight ml-2 tracking-wide">TIGER DATA CODING TOOL</span>
					</div>
				</a>
				<div className="block lg:hidden">
					<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
						<svg
							className="fill-current h-3 w-3"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">

							<title>Menu</title>
							<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
						</svg>
					</button>
				</div>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow"></div>
					<div>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							onClick={goToCodebooks}
						>
							CODEBOOKS
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 underline"
							onClick={goToDatasets}
						>
							DATASETS
						</a>
					</div>
				</div>
			</nav>
      
      // Add the dataset here.
      
		</div>
	);
}
export default DatasetsPage;
