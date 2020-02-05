## [Demo Basic](https://wya-team.github.io/wya-vc/dist/editor/basic.html)
## 功能
富文本

- Editor.View: 富文本预览组件

## API

#### 属性
##### Editor
属性 | 说明 | 类型 | 默认值
---|---|---|---
value | 富文本内容 | `String` | -
options | 富文本toolbar（优先级最高） | `Object` | -
disabled | 富文本是否不可编辑 | `Boolean` | false
imgUploadOpts | 上传图片的配置项 | `Object` | `{accept: 'image/gif,image/jpeg,image/jpg,image/png'}`
videoUploadOpts | 上传视频的配置项 | `Object` | `{accept: 'video/mp4,video/webm,video/ogg'}`
register | Quill扩展注册 | `Function` | -

##### Editor.View
属性 | 说明 | 类型 | 默认值
---|---|---|---
content | 富文本内容（html形式） | `String` | -

#### 事件
##### Editor
属性 | 说明 | 类型 | 默认值
---|---|---|---
@blur | 富文本失去焦点 | `function` | `editor`
@focus | 富文本获取焦点 | `function` | `editor`
@change | 富文本内容变化 | `function` | `{ html, text, editor }`
@ready | quill对象已经实例化 | `function` | -

#### Slot
属性 | 说明
---|---
toolbar | 工具栏内容(外层节点需要有id属性为'toolbar')
extend | 组件提供的工具栏上的尾部工具拓展(和`toolbar`插槽不能同时使用)

## 基础用法

```vue
<template>
    <vc-editor 
        ref="editor"
        v-model="value"
        :options="options"
        :disabled="disabled"
    />
    <vc-editor-view :content="value" />

    <vc-editor 
        ref="editor"
        v-model="formValidate.value"
        :disabled="disabled"
    >
        <div id="toolbar" slot="toolbar">
            <span class="ql-formats">
                <button class="ql-bold"/>
                <button class="ql-italic"/>
                <button class="ql-underline"/>
                <button class="ql-strike"/>
            </span>
        </div>
    </vc-editor>
</template>
<script>
import Editor from '../editor';

export default {
    name: "vc-editor-basic",
    components: {
        "vc-editor": Editor,
        "vc-editor-view": Editor.View,
    },
    data() {
        return {
            options: {
                modules: {
					ImageExtend: {
						upload: {
							showTips: false,
							size: 88888,
							max: 2,
							multiple: false
						}
					},
					toolbar: "#toolbar",
				}
            },
            disabled: false,
            value: ''
        };
    },
    computed: {
        
    },
    mounted() {
        console.log(this.$refs.editor);
    },
    methods: {
        
    }
};
</script>

```