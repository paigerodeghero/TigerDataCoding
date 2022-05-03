import { useNavigate } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();

	const goToCodebooks = () => {
		navigate('/codebooks');
	};
	const goToDatasets = () => {
		navigate('/datasets');
	};

	return (
		<div className="h-[80vh] flex flex-col">
			<div className="space-x-12 my-auto">
				<button
					type="button"
					className="bg-orange block-home"
					onClick={goToCodebooks}
				>
					CODEBOOKS
				</button>
				<button
					type="button"
					className="bg-purple-dark block-home"
					onClick={goToDatasets}
				>
					DATASETS
				</button>
			</div>
		</div>
	);
}
export default Main;
