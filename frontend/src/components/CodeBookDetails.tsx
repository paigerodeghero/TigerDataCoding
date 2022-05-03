import addDataLogo from '../assets/addDataLogo.png';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { CodebookImpl } from '../models/codebook';
import { DatasetImpl } from '../models/dataset';
import { UserImpl } from '../models/user';
import { CodeImpl } from '../models/code';

const data: CodebookImpl = new CodebookImpl(
	1,
	'label 1',
	'description 1',
	[
		new DatasetImpl(1, 'dataset 1', '', new UserImpl(1, 'test@example.com')),
		new DatasetImpl(2, 'dataset 2', '', new UserImpl(1, 'test@example.com')),
		new DatasetImpl(3, 'dataset 3', '', new UserImpl(1, 'test@example.com')),
	],
	true,
	[new CodeImpl(1, 'code 1', 'description 1', 'examples', 'notes')]
);

function CodeBookDetails() {
	const [open, setOpen] = useState(false);
	const [code, setCode] = useState('');
	const [description, setDescription] = useState('');
	const [examples, setExamples] = useState('');
	const [notes, setNotes] = useState('');
	const [codebook, setCodebook] = useState(data);
	const [label, setLabel] = useState('');
	const [cbDescription, setCbDescription] = useState('');
	const [isPrivate, setIsPrivate] = useState(false);

	const handleClickToOpen = () => {
		setOpen(true);
	};

	const handleSubmit = () => {
		codebook.codes.push({
			id: codebook.codes.length,
			code: code,
			description: description,
			examples: examples,
			notes: notes,
		});
		setCodebook(codebook);
		setOpen(false);
	};

	return (
		<div className="p-4">
			<div className="flex flex-col">
				<div className="w-full flex justify-center">
					<div className="flex w-full">
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">Label</div>
							<input
								className="focus:border-black block rounded-md border p-2"
								value={label}
								onChange={(e) => setLabel(e.target.value)}
							/>
						</div>
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">DATASETS</div>
							<select name="codebooks" className="rounded-md border p-2">
								{codebook.datasets.map((ds) => (
									<option key={ds.id} value={ds.id}>
										{ds.label}
									</option>
								))}
							</select>
						</div>
						<div className="flex-initial flex flex-col justify-end font-medium m-7">
							<div>
								<input
									className="rounded mr-1"
									type="checkbox"
									checked={isPrivate}
									onChange={() => setIsPrivate(!isPrivate)}
								/>
								Private
							</div>
						</div>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<div className="flex w-full">
						<div className="flex grow flex-col m-5">
							<div className="font-medium text-left">Description</div>
							<textarea
								name="Description"
								className="rounded-md border p-2"
								value={cbDescription}
								onChange={(e) => setCbDescription(e.target.value)}
							></textarea>
						</div>
					</div>
				</div>

				<div className="w-full flex justify-center p-4">
					<table className="table-auto w-full shadow-2xl">
						<thead className="border-b">
							<tr className="bg-gray-100">
								<th className="text-center p-4">CODE</th>
								<th className="text-center p-4">DESCRIPTION</th>
								<th className="text-center p-4">EXAMPLES</th>
								<th className="text-center p-4">NOTES</th>
							</tr>
						</thead>
						<tbody>
							{codebook.codes.map((c) => {
								return (
									<tr
										key={c.id}
										className="border-b hover:bg-orange hover:cursor-pointer"
									>
										<td className="p-4">{c.code}</td>
										<td className="p-4">{c.description}</td>
										<td className="p-4">{c.examples}</td>
										<td className="p-4">{c.notes}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>

			<div>
				<Dialog open={open} onClose={() => setOpen(false)}>
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
						<Button onClick={handleSubmit} color="primary" autoFocus>
							Submit
						</Button>
						<Button onClick={() => setOpen(false)} color="primary" autoFocus>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>

			<div className="absolute right-8 bottom-8">
				<div className="flex items-center cursor-pointer hover:opacity-75">
					<img
						alt="add"
						src={addDataLogo}
						width="54"
						height="54"
						onClick={handleClickToOpen}
					></img>
				</div>
			</div>
		</div>
	);
}
export default CodeBookDetails;
