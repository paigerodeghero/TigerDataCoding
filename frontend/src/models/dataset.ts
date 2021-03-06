import { User } from './user';

export interface Dataset {
	id: number;
	label: string;
	description: string;
	owner: User;
	coders: User[];
	isPrivate: boolean;
}

export class DatasetImpl implements Dataset {
	id: number;
	label: string;
	description: string;
	owner: User;
	coders: User[];
	isPrivate: boolean;

	constructor(
		id: number,
		label: string,
		description: string = '',
		owner: User,
		coders: User[] = [],
		isPrivate: boolean = false
	) {
		this.id = id;
		this.label = label;
		this.description = description;
		this.owner = owner;
		this.coders = coders;
		this.isPrivate = isPrivate;
	}
}
