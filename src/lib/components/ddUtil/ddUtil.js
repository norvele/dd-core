export default class Util
{
	static nodesToArray(input)
	{
		let els = [];
		if (input instanceof HTMLElement) {
			els.push(input);
		} else if (Array.isArray(input)) {
			els = input;
		} else if (input instanceof NodeList) {
			els = [...input];
		} else if (typeof input === 'string') {
			els = [...document.querySelectorAll(input)];
		} else {
			console.log(`${input} must be Array, NodeList, selector or HTMLElement`);
			return [];
		}
		return els;
	}

	static eachNodes(input, callback)
	{
		let els = this.nodesToArray(input);
		els.forEach(function(el){
			callback.call(el, el);
		});
	}
}