import { createVue, createComponent, destroyVM } from '@tests/helper';
import Tag from '../index';

describe('Tag', () => {
	it('basic', () => {
		expect(typeof Tag).to.equal('object');

		const vm = createComponent(Tag, {});
		expect(typeof vm).to.equal('object');

		destroyVM(vm);
	});

	it('closable', () => {
		let count = 0;
		let vm = createVue({
			template: `
				<vc-tag closable @close="handleClose"></vc-tag>
			`,
			components: {
				'vc-tag': Tag
			},
			data() {
				return {

				};
			},
			methods: {
				handleClose() {
					count++;
				}
			}
		});

		vm.$el.querySelector('.vc-tag__close').click();
		expect(count).to.equal(1);

		destroyVM(vm);
	});
	it('check', () => {
		let count = 0;
		let vm = createVue({
			template: `
				<vc-tag checkable @click="handleClick"></vc-tag>
			`,
			components: {
				'vc-tag': Tag
			},
			data() {
				return {

				};
			},
			methods: {
				handleClose() {
					count++;
				}
			}
		});

		vm.$el.click();
		expect(count).to.equal(1);

		destroyVM(vm);
	});
	it('checkable', () => {
		let count = 0;
		let vm = createVue({
			template: `
				<vc-tag :checkable="false" @click="handleClick"></vc-tag>
			`,
			components: {
				'vc-tag': Tag
			},
			data() {
				return {

				};
			},
			methods: {
				handleClose() {
					count++;
				}
			}
		});

		vm.$el.click();
		expect(count).to.equal(0);

		destroyVM(vm);
	});
});
