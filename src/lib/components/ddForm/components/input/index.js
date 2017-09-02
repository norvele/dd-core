import Util from '/src/lib/components/ddUtil';

export default class Input
{
	
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

	static initFew(input)
	{
		Util.eachNodes(input, (el) => {
			new InputControl(el);
		});
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