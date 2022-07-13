# 表情包




## 表情包

获取随机或指定的表情包图片。

可用表情包列表：（通过名称和别名均可获取）

| 名称 | 别名 |
|:-----|:-----|
| Arcaea | 616, arcare |
| capoo | ljm |
| care |  |
| cy |  |
| D猫 | dm |
| mopemope | mope |
| seseren | ssr |
| vtb |  |
| vtb_laugh | bscx, fbk, tskk |
| yw |  |
| 原 |  |
| 嘉然 |  |
| 寄 | g |
| 小豆泥 | xdn |
| 废狗 |  |
| 悲伤猫猫头 | xmmt |
| 摆烂 | 摆 |
| 未分类 | r |
| 柴郡猫 | cjm |
| 流泪猫猫头 | llmmt |
| 熊猫头 |  |
| 狐萝卜 |  |
| 猫猫 | aw, mm |
| 猫猫头 | mmt |
| 白圣女 |  |



::: tip 注意
表情包功能内图片收集自网络；其版权归各自作者所有。有鉴于这些图片：

- 公开流通于网络
- 非盈利/非商业性使用

故在 AimuBot 中提供用于表情包功能。如您将其用于其他用途可能构成侵犯著作权。 AimuBot 开发组对您的行为不予承担任何责任。
:::

命令格式：

```text
/<name> [id]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/arcaea' },{ position: 'left', chain: [{ img: '/images/Biaoqingbao/10.jpg' },] },{ position: 'right', msg: '/llmmt 13' },{ position: 'left', chain: [{ img: '/images/Biaoqingbao/13.jpg' },] },
]">
	</neko-box>
</ClientOnly>

