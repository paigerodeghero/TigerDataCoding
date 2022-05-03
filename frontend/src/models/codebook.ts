import { Code } from './code';
import { Dataset } from './dataset';

export interface Codebook {
	id: number;
	label: string;
	description: string;
	datasets: Dataset[];
	isPrivate: boolean;
	codes: Code[];
}

export class CodebookImpl implements Codebook {
	id: number;
	label: string;
	description: string;
	datasets: Dataset[];
	isPrivate: boolean;
	codes: Code[];

	constructor(
		id: number,
		label: string,
		description: string = '',
		datasets: Dataset[] = [],
		isPrivate: boolean = false,
		codes: Code[] = []
	) {
		this.id = id;
		this.label = label;
		this.description = description;
		this.datasets = datasets;
		this.isPrivate = isPrivate;
		this.codes = codes;
	}

	setLabel(label: string): CodebookImpl {
		this.label = label;
		return this;
	}
}
