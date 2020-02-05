## [Demo Basic](https://wya-team.github.io/wya-vc/dist/artboard/basic.html)
## 功能
artboard canvas画板

## API

#### 属性
属性 | 说明 | 类型 | 默认值
---|---|---|---
options | canvas配置参数 | Object | -
getInstance | 获取画布实例 | Function | -
width | 设置canvas的宽度,不传则根据容器的宽度来设置 | Number | 0
height | 设置canvas的高度,不传则根据容器的高度来设置 | Number | 0

#### 事件

属性 | 说明 | 参数 | 返回值
---|---|---|---
change | canvas内容发生改变时触发 | - | snapshots: 所有快照数据, current: 当前快照位置, allowUndo: 是否能够回退, allowRedo: 是否能够撤销

#### 方法

属性 | 说明 | 参数 | 返回值
---|---|---|---
undo | 回退一画 | - | -
redo | 取消回退 | - | -
reset | 重置画板 | - | -

## Feature
+ 有初始值
+ options可动态调整

## 基础用法

```vue
<template>
	<div class="v-artboard">
		<vc-artboard 
			ref="artboard" 
			:options="{ strokeStyle: 'red', shadowColor: 'red' }"
			:get-instance="getInstance"
			@change="handleChange" 
		/>	
		<div style="margin-top: 20px;">
			<vc-button @click="handleReset">重置画布</vc-button>
			<vc-button @click="handleGetImg">生成图片</vc-button>
			<vc-button @click="handleUndo">回退一步</vc-button>
			<vc-button @click="handleRedo">取消回退</vc-button>
		</div>
		<img :src="src" alt="">
	</div>
</template>

<script>
import Message from '../../message';
import Button from '../../button';
import Artboard from '../artboard';

export default {
	name: 'v-artboard',
	components: {
		'vc-artboard': Artboard,
		'vc-button': Button,
	},
	props: {
	},
	data() {
		return {
			src: '',
			instance: null
		};
	},
	created() {
	},
	methods: {
		getInstance(instance) {
			this.instance = instance;
		},
		handleUndo() {
			if (!this.undo) {
				Message.warning("已经没有回退的步骤了");
				return;
			}
			this.instance.undo();
		},
		handleRedo() {
			if (!this.redo) {
				Message.warning("已经没有撤销的步骤了");
				return;
			}
			this.instance.redo();
		},
		handleReset() {
			this.instance.reset();
		},
		handleGetImg() {
			this.src = this.instance.canvas.toDataURL({ type: this.type, encoderOptions: this.encoderOptions });
		},
		handleChange({ snapshots, current }) {
			console.log('snapshots :', snapshots);
			console.log('current :', current);
			if (current === 0) {
				this.undo = false;
			} else if (current === snapshots.length) {
				this.undo = true;
				this.redo = false;
			} else {
				this.undo = true;
				this.redo = true;
			}
		}
	},
};
</script>

<style lang="scss">
.v-artboard {
	canvas {
		width: 100%;
		height: 100%;
	}
	img {
		width: 200px;
		height: 200px;
	}
}
</style>

```