# WolframAlpha

WolframAlpha 查询（请使用英语）


## WolframAlpha查询

进行一次 [WolframAlpha](https://www.wolframalpha.com/) 查询（请使用英语）。视网络情况，查询可能需要 5~30 秒，请勿重复查询。

::: tip
示例可以从 [Examples by Topic](https://www.wolframalpha.com/examples/) 获取。
:::

::: warning 注意
由于接口为 WolframAlpha Non-commercial API，因此查询结果禁止任何形式的商业使用。
:::

::: danger 警告
**绝对禁止**查询任何涉及人物、政治相关内容。AimuBot 已内置内容审核，查询上述内容一经发现将**永久封禁您的 Bot 使用权限**。
:::

命令格式：

```text
/wa <query_content>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/wa heart surface' },{ position: 'left', chain: [{ reply: '/wa heart surface' }, { img: '/images/WolframAlpha/1.webp' }] },{ position: 'right', msg: '/wa mass of sun' },{ position: 'left', chain: [{ reply: '/wa mass of sun' }, { img: '/images/WolframAlpha/2.webp' }] },{ position: 'right', msg: '/wa #1f1e33' },{ position: 'left', chain: [{ reply: '/wa #1f1e33' }, { img: '/images/WolframAlpha/3.webp' }] },
]">
	</neko-box>
</ClientOnly>

