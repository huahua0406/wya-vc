## 功能
- 针对`@wya/vc`组件的配置和方法
- 参数配置原则: `userOptions(single)` > `registerOptions(HOF)` > `globalOptions(Vc)` > `defaultOptions(single)`

## 方法

方法 | 说明 | 类型
---|---|---|---
init | 初始化 | `() => void`
clear | 删除api式组件 | `Function` | `(cName: String?, focre: Boolean?) => void`

> clear() 清理需要自动销毁的组件，clear(null, true), 强制清除所有组件；clear('xxx'), 清理单个

## 组件配置

#### 如下：
```
{
	[组件 - 大驼峰]: {
		// .. 配置信息
	}
}
```

- `Upload`

```
Upload: {
	IMG_UPLOAD_URL: null,
	FILE_UPLOAD_URL: null
}

```