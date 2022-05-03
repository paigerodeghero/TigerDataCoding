import { useNavigate } from 'react-router-dom';
import { CodebookImpl } from '../models/codebook';
import { DatasetImpl } from '../models/dataset';
import { UserImpl } from '../models/user';

const codebooks: CodebookImpl[] = [
	new CodebookImpl(
		1,
		'label 1',
		'description 1',
		[new DatasetImpl(1, 'dataset 1', '', new UserImpl(1, 'test@example.com'))],
		false
	),
	new CodebookImpl(
		2,
		'label 2',
		'description 2',
		[new DatasetImpl(1, 'dataset 2', '', new UserImpl(1, 'test@example.com'))],
		true
	),
];

function CodeBook() {
	const navigate = useNavigate();

	return (
		<div className="p-4">
			<div className="flex flex-col items-center">
				<div className="w-full flex justify-end">
					<input
						type="search"
						className="mb-4 px-4 py-2 border border-solid border-gray-300 rounded-lg min-w-[20%]
										focus:text-gray-700 focus:bg-white focus:border-black focus:border-2px focus:outline-none"
						placeholder="Search"
					></input>
				</div>

				<table className="w-full shadow-2xl">
					<thead>
						<tr className="bg-gray-100">
							<th className="text-center p-4">LABEL</th>
							<th className="text-center p-4">DESCRIPTION</th>
							<th className="text-center p-4">DATASET</th>
							<th className="text-center p-4">PRIVATE</th>
						</tr>
					</thead>
					<tbody>
						{codebooks.map((cb, i) => (
							<tr
								className="border-b hover:bg-orange hover:cursor-pointer hover:text-white"
								onClick={() => navigate(cb.id.toString())}
							>
								<td className="p-4">{cb.label}</td>
								<td className="p-4">{cb.description}</td>
								<td className="p-4">
									{cb.datasets.map((ds) => (
										<p>{ds.label}</p>
									))}
								</td>
								<td className="p-4">
									<input
										className="h-4 w-4 border border-gray-300 rounded-sm cursor-pointer mt-1
										checked:bg-blue-600 checked:border-blue-600 
										focus:outline-none"
										type="checkbox"
										checked={cb.isPrivate}
										onChange={() => {}}
									></input>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
export default CodeBook;
