import { createComponent } from "@tests/helper";
import Card from '../index';

describe('Card', () => {

	it("basic", () => {
		expect(typeof Card).to.equal("object");

		const vm = createComponent(Card, {});
		expect(typeof vm).to.equal("object");
	});

	it("border", () => {
		const vm = createComponent(Card, {
			border: true
		});

		expect(vm.$el.classList.contains("is-border")).to.equal(true);
	});
});
