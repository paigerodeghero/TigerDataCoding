export interface User {
	id: number;
	email: string;
}

export class UserImpl implements User {
	id: number;
	email: string;

	constructor(id: number, email: string) {
		this.id = id;
		this.email = email;
	}
}
