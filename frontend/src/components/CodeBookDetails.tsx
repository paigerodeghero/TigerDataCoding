import addDataLogo from '../assets/addDataLogo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

function CodeBookDetails() {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('Test Code');
	const [description, setDescription] = useState('Test Description');
	const [examples, setExamples] = useState('Test Examples');
	const [notes, setNotes] = useState('Test Notes');
	const codeData: Array<any> = [];
	const [showCode, setShowCode] = useState(true);

	const handleClickToOpen = () => {
		setOpen(true);
	};

	const handleToSubmit = () => {
		codeData.push({
			Code: code,
			Description: description,
			Example: examples,
			Note: notes,
		});
		setCode('Test Code');
		setDescription('Test Description');
		setExamples('Test Examples');
		setNotes('Test Notes');
		console.log(codeData);
		setShowCode(false);
		setOpen(false);
	};
	const handleToClose = () => {
		setOpen(false);
	};

	return (
		<div>
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
							<div className="font-medium text-left">DATASETS</div>
							<select name="codebooks" className="rounded-md border p-2">
								<option value="Codebook 1">Dataset 1</option>
								<option value="Codebook 2">Dataset 2</option>
								<option value="Codebook 3">Dataset 3</option>
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
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center">
					<table className="table-auto w-10/12 shadow-2xl">
						<thead className="border-b">
							<tr className="bg-gray-100">
								<th className="text-left p-4 font-medium">Code</th>
								<th className="text-left p-4 font-medium">Description</th>
								<th className="text-left p-4 font-medium">Example</th>
								<th className="text-left p-4 font-medium">Notes</th>
							</tr>
						</thead>
						{showCode === false ? (
							<tbody>
								{codeData.map((doc) => {
									return (
										<tr key={doc.id} className="border-b hover:bg-[#ED6430]">
											<td className="p-4">{doc.Code}</td>
											<td className="p-4">{doc.Description}</td>
											<td className="p-4">{doc.Example}</td>
											<td className="p-4">{doc.Note}</td>
										</tr>
									);
								})}
							</tbody>
						) : (
							<div></div>
						)}
					</table>
				</div>
			</div>

			<footer>
				<div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
					<div className="text-sm lg:flex-grow"></div>
					<div className="flex items-center flex-shrink-0 text-white mr-20 mt-10">
						<img
							src={addDataLogo}
							width="54"
							height="54"
							className="object-contain"
							onClick={handleClickToOpen}
						></img>
					</div>
				</div>
			</footer>

			<div>
				<Dialog open={open} onClose={handleToClose}>
					<div className="flex grow flex-col m-5">
						<DialogTitle>{'Code'}</DialogTitle>
						<input
							type="text"
							className="focus:border-black block rounded-md border p-2"
							id="Label"
							onChange={(e) => setCode(e.target.value)}
						></input>
						<DialogTitle>{'Description'}</DialogTitle>
						<textarea
							name="Description"
							className="rounded-md border p-2"
							onChange={(e) => setDescription(e.target.value)}
						></textarea>
						<DialogTitle>{'Examples'}</DialogTitle>
						<textarea
							name="Examples"
							className="rounded-md border p-2"
							onChange={(e) => setExamples(e.target.value)}
						></textarea>
						<DialogTitle>{'Notes'}</DialogTitle>
						<textarea
							name="Notes"
							className="rounded-md border p-2"
							onChange={(e) => setNotes(e.target.value)}
						></textarea>
					</div>
					<DialogActions>
						<Button onClick={handleToSubmit} color="primary" autoFocus>
							Submit
						</Button>
						<Button onClick={handleToClose} color="primary" autoFocus>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		</div>
	);
}
export default CodeBookDetails;
