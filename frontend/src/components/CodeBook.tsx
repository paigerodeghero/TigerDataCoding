import { useNavigate } from 'react-router-dom';

function CodeBook() {
	const navigate = useNavigate();
	const goToCodeBookDetails = () => {
		navigate('/CodeBookDetails');
	};

	return (
		<div>
			<div className="flex justify-end mt-3 mr-3">
				<div className="mb-3 xl:w-96">
					<input
						type="search"
						className="
              			form-control
			            block
			            w-full
			            px-3
			            py-1.5
			            text-base
			            font-normal
			            text-gray-700
			            bg-white bg-clip-padding
			            border border-solid border-gray-300
			            rounded
			            transition
			            ease-in-out
			            m-0
			            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
			            "
						id="exampleSearch"
						placeholder="Search"
					></input>
				</div>
			</div>

			<table className="table-auto w-full m-5 mr-5 shadow-2xl">
				<thead className="border-b">
					<tr className="bg-gray-100">
						<th className="text-left p-4 font-medium">Label</th>
						<th className="text-left p-4 font-medium">Description</th>
						<th className="text-left p-4 font-medium">Dataset</th>
						<th className="text-left p-4 font-medium">Private</th>
					</tr>
				</thead>
				<tbody>
					<tr
						className="border-b hover:bg-[#ED6430]"
						onClick={goToCodeBookDetails}
					>
						<td className="p-4">Test Label</td>
						<td className="p-4">Test description</td>
						<td className="p-4">Test dataset</td>
						<td className="p-4">
							<input
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-3"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							></input>
						</td>
					</tr>
					<tr className="border-b hover:bg-[#ED6430]">
						<td className="p-4">Test Label</td>
						<td className="p-4">Test description</td>
						<td className="p-4">Test dataset</td>
						<td className="p-4">
							<input
								className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-3"
								type="checkbox"
								value=""
								id="flexCheckDefault"
							></input>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
export default CodeBook;
