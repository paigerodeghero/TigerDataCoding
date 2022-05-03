import { Dataset } from './dataset';

export interface Codebook {
	id: number;
	label: string;
	description: string;
	datasets: Dataset[];
	isPrivate: boolean;
}

export class CodebookImpl implements Codebook {
	id: number;
	label: string;
	description: string;
	datasets: Dataset[];
	isPrivate: boolean;

	constructor(
		id: number,
		label: string,
		description: string = '',
		datasets: Dataset[] = [],
		isPrivate: boolean = false
	) {
		this.id = id;
		this.label = label;
		this.description = description;
		this.datasets = datasets;
		this.isPrivate = isPrivate;
	}
}
