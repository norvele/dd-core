export default class Input
{
	static normalizeElements(input)
	{
		let els = [];
		if (input instanceof HTMLElement) {
			els.push(input);
		} else if (Array.isArray(input)) {
			els = input;
		} else if (input instanceof NodeList) {
			els = [...input];
		} else {
			console.log(`${input} must be Array, NodeList or HTMLElement`);
			return [];
		}
		return els;
	}

	static initInputControls(input)
	{
		let els = this.normalizeElements(input);
		els.forEach(function(el){
			new InputControl(el);
		});
	}
}

export class InputControl
{
	constructor(el)
	{
		el.inputControl = this;
		this.el = el;
		this.input = this.el.querySelector('input');
		this.label = this.el.querySelector('label');
		this.toggleCallback = () => {};
		this.init();
	}

	init()
	{
		this.toggleCallback = (e) => {
			this.toggle();
			e.preventDefault();
		};
		this.el.addEventListener('click', this.toggleCallback);
		this.el.addEventListener('touch', this.toggleCallback);
	}

	destroy()
	{
		this.el.removeEventListener('click', this.toggleCallback);
		this.el.removeEventListener('touch', this.toggleCallback);
		delete this.el.inputControl;
	}

	toggle()
	{
		this.input.checked = !this.input.checked;
		event.preventDefault();
	}
}