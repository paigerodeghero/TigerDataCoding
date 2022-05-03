import { useNavigate } from 'react-router-dom';
import { DatasetImpl } from '../models/dataset';
import { UserImpl } from '../models/user';

const data: DatasetImpl = new DatasetImpl(
	1,
	'dataset 1',
	'',
	new UserImpl(1, 'test@example.com')
);

function DatasetConfig() {
	const navigate = useNavigate();
	const goToViewDatasets = () => {
		navigate('/datasetdatapageowner');
	};

	return (
		<div className="p-4">
			<div className="flex justify-end">
				<div className="w-1/2 flex justify-end">
					<button className="btn-1" id="viewDataset" onClick={goToViewDatasets}>
						VIEW DATASET
					</button>
				</div>
			</div>

			<div className="w-full flex flex-col items-center">
				<div className="flex w-full">
					<div className="flex grow flex-col m-5 mb-0">
						<div className="font-medium text-left">Label</div>
						<input
							type="text"
							className="focus:border-black block rounded-md border p-2"
							id="Label"
						></input>
					</div>
					<div className="flex grow flex-col m-5 mb-0">
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
				<div className="flex w-full p-4">
					<div className="flex w-full">
						<div className="flex grow flex-col">
							<div className="font-medium text-left">Description</div>
							<textarea
								name="Description"
								className="rounded-md border p-2"
							></textarea>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex flex-col items-center space-y-4 p-4">
				<div className="w-full flex justify-between">
					<div className="font-medium text-left">Coder Assignment</div>
					<div className="flex">
						<button className="btn-1 min-w-max" id="newCoder">
							NEW CODER
						</button>
						<input
							type="search"
							className="focus:border-black block rounded-md border p-2 ml-5 focus:outline-none"
							id="Search"
							placeholder="Search"
						></input>
					</div>
				</div>

				<table className="table-auto w-full shadow-2xl">
					<thead className="border-b">
						<tr className="bg-gray-100">
							<th className="text-center p-4">USERNAME</th>
							<th className="text-center p-4">EMAIL</th>
							<th className="text-center p-4">ROWS</th>
							<th className="text-center p-4">PROGRESS</th>
						</tr>
					</thead>
					<tbody>
						<tr className="border-b hover:bg-orange hover:cursor-pointer">
							<td className="p-4">User 1</td>
							<td className="p-4">user1@email.com</td>
							<td className="p-4">1-10</td>
							<td className="p-4">10%(1/10)</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default DatasetConfig;
