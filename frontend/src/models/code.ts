export interface Code {
	id: number;
	code: string;
	description: string;
	examples: string;
	notes: string;
}

export class CodeImpl implements Code {
	id: number;
	code: string;
	description: string;
	examples: string;
	notes: string;

	constructor(
		id: number,
		code: string = '',
		description: string = '',
		examples: string = '',
		notes: string = ''
	) {
		this.id = id;
		this.code = code;
		this.description = description;
		this.examples = examples;
		this.notes = notes;
	}
}
