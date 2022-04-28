import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function DatasetConfig() {
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
						<span className="font-semibold text-xl tracking-tight ml-2">TIGER DATA CODING TOOL</span>
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
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 underline"
							onClick={goToCodebooks}
						>
							CODEBOOKS
						</a>
						<a
							href="#responsive-header"
							className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
							onClick={goToDatasets}
						>
							DATASETS
						</a>
					</div>
				</div>
			</nav>

			<div className="flex justify-end mt-3 mr-3">
				<div className="mb-3">
					<button
						className="p-2 w-48 mt-4 text-white rounded-md bg-[#ED6430]"
						id="viewDataset"
					>View Dataset</button>
				</div>
			</div>
			<div className='flex w-full flex-col'>
				<div className='w-full flex justify-center'>
					<div className='flex w-11/12'>
						<div className='flex grow flex-col m-5'>
							<div className="font-medium text-left">Label</div>
							<input
								type="text"
								className="focus:border-black block rounded-md border p-2"
								id="Label"
							></input>
						</div>
						<div className='flex grow flex-col m-5'>
							<div className="font-medium text-left">Codebook</div>
							<select name="codebooks" className='rounded-md border p-2'>
								<option value="Codebook 1">Codebook 1</option>
								<option value="Codebook 2">Codebook 2</option>
								<option value="Codebook 3">Codebook 3</option>
							</select>
						</div>
						<div className='flex-initial flex flex-col justify-end font-medium m-7'>
							<div><input className='rounded mr-1' type="checkbox" id="isPrivate" name="IsPrivate" />Private</div>
						</div>
					</div>
				</div>
				<div className='w-full flex justify-center'>
					<div className='flex w-11/12'>
						<div className='flex grow flex-col m-5'>
							<div className="font-medium text-left">Description</div>
							<textarea name="Description" className='rounded-md border p-2'></textarea>
							<div className="flex justify-between mt-10">
								<div className="font-medium text-left">Coder Assignment</div>
								<div className='flex'><button
									className="p-2 text-white rounded-md bg-[#ED6430]"
									id="newCoder"
								>New Coder</button>
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
				<div className='w-full flex justify-center'>
					<table className="table-auto w-10/12 shadow-2xl">
						<thead className="border-b">
							<tr className="bg-gray-100">
								<th className="text-left p-4 font-medium">
									Username
								</th>
								<th className="text-left p-4 font-medium">
									Email
								</th>
								<th className="text-left p-4 font-medium">
									Rows
								</th>
								<th className="text-left p-4 font-medium">
									Progess
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b hover:bg-[#ED6430]">
								<td className="p-4">
									User 1
								</td>
								<td className="p-4">
									user1@email.com
								</td>
								<td className="p-4">
									1-10
								</td>
								<td className="p-4">
									10%(1/10)
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
}
export default DatasetConfig;
