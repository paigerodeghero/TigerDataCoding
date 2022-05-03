import { useNavigate } from 'react-router-dom';

function DatasetConfig() {
	const navigate = useNavigate();

	const goToViewDatasets = () => {
		navigate('/datasetdatapageowner');
	};

	return (
		<div>
			<div className="flex justify-end mt-3 mr-3">
				<div className="mb-3">
					<button
						className="p-2 w-48 mt-4 text-white rounded-md bg-[#ED6430]"
						id="viewDataset"
						onClick={goToViewDatasets}
					>
						View Dataset
					</button>
				</div>
			</div>
			<div className="flex w-full flex-col">
				<div className="w-full flex justify-center">
					<div className="flex w-11/12">
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">Label</div>
							<input
								type="text"
								className="focus:border-black block rounded-md border p-2"
								id="Label"
							></input>
						</div>
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">Codebook</div>
							<select name="codebooks" className="rounded-md border p-2">
								<option value="Codebook 1">Codebook 1</option>
								<option value="Codebook 2">Codebook 2</option>
								<option value="Codebook 3">Codebook 3</option>
							</select>
						</div>
						<div className="flex-initial flex flex-col justify-end font-medium m-7">
							<div>
								<input
									className="rounded mr-1"
									type="checkbox"
									id="isPrivate"
									name="IsPrivate"
								/>
								Private
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="flex w-11/12">
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">Description</div>
							<textarea
								name="Description"
								className="rounded-md border p-2"
							></textarea>
							<div className="flex justify-between mt-10">
								<div className="font-medium text-left">Coder Assignment</div>
								<div className="flex">
									<button
										className="p-2 text-white rounded-md bg-[#ED6430]"
										id="newCoder"
									>
										New Coder
									</button>
									<input
										type="search"
										className="focus:border-black block rounded-md border p-2 ml-5 focus:outline-none"
										id="Search"
										placeholder="Search"
									></input>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<table className="table-auto w-10/12 shadow-2xl">
						<thead className="border-b">
							<tr className="bg-gray-100">
								<th className="text-left p-4 font-medium">Username</th>
								<th className="text-left p-4 font-medium">Email</th>
								<th className="text-left p-4 font-medium">Rows</th>
								<th className="text-left p-4 font-medium">Progess</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b hover:bg-[#ED6430]">
								<td className="p-4">User 1</td>
								<td className="p-4">user1@email.com</td>
								<td className="p-4">1-10</td>
								<td className="p-4">10%(1/10)</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default DatasetConfig;
