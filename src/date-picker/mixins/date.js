export default {
	props: {
		// 面板内的value统一为数组格式
		value: Array,
		disabledDate: {
			type: Function,
			default: () => false
		},
		startDate: Date,
		focusedDate: [Date, Array],
		showTime: {
			type: Boolean,
			default: false
		},
		timePickerOptions: {
			type: Object,
			default: () => ({})
		}
	},
};