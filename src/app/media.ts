export class Media {
	id: number;
	title: string = '';
	type: string = '';
	extrainfo: string = '';
	active: boolean = true;

	constructor(values: Object = {}) {
		Object.assign(this, values);
	}	

}
