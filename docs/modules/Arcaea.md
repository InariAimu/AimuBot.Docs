# Arcaea

提供 Arcaea 查分，b30，谱面预览等功能。使用 `ac` 与其他 Bot 的 `arc`，`a` 等进行区分，避免一呼百应。同时适量增加操作成本，防止滥用。

**使用大部分功能之前，请先使用 `/ac bind` 绑定一个 arcaea id。**

::: warning 注意

Arcaea 是 Lowiro 的注册商标。商标是其各自所有者的财产。游戏材料的版权归 Lowiro 所有。Lowiro 没有认可也不对本网站或其内容负责。

:::



::: tip 最终用户许可协议

您应知悉，使用本模块进行 Arcaea 查分将违反 *Arcaea使用条款 3.2-4 和 3.2-6*，以及 *Arcaea二次创作管理条例*。

因使用本功能进行查分而造成的损失（包括但不限于账号被 lowiro 封禁、shadowban 等），Aimubot 开发组不予承担任何责任。

:::

::: tip 隐私政策

使用查分将默认您允许 Aimubot 收集/记录关于您的使用记录，包括但不限于 Arcaea 用户名、游玩记录等。

您的数据将用于历史 ptt 显示、最高分记录显示、推分建议等功能。

我们将使用行业安全标准来保存数据，并不会提供给任何第三方。

:::

## 主命令

```text
/ac
```

Arcaea 模块中大部分命令均以该命令起始。如果不指定任何参数，该功能的行为相当于 [Recent查询](#recent-查询)。


## 绑定 Arcaea

绑定 Arcaea Id 或 Name（推荐使用 9 位 Arcaea 数字 id）

命令格式：

```text
/ac bind <arc_id>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac bind 559842662' },{ position: 'left', chain: [{ reply: '/ac bind 559842662' }, { msg: '已绑定 InariAimu/559842662 (12.92)' } ] },
]">
	</neko-box>
</ClientOnly>


## 保存分数 <Badge type="warning" text="开发中" vertical="top" />

在不查询或无法查询成绩时保存分数

::: warning 注意
仅用于无法查分时在 bot 数据库中手动保存您的成绩，请谨慎使用。
:::

命令格式：

```text
/acs <song_name> [difficulty=ftr] <score>
```

示例：

```text
/acs testify byd 10002221
```


## 查询 b30

进行一次 best30 查询。

::: warning 注意
您的 ptt 越低，则查分所需要的等待时间越长（有时可能长达两分钟以上），这并不意味着 bot 失去响应。请耐心等待，不要重复查询。
:::

示例：

```text
/ac b30
```


## 查询 b40

查询 b40（在原有 b30 的基础上增加 9 个地板以下的 overflow）

::: warning 注意
您的 ptt 越低，则查分所需要的等待时间越长（有时可能长达两分钟以上），这并不意味着 bot 失去响应。请耐心等待，不要重复查询。
:::

示例：

```text
/ac b40
```


## 查询别名 <Badge type="warning" text="测试中" vertical="top" />

查询某歌曲的别名。

命令格式：

```text
/ac alias <song_name>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac alias 妙脆角' },{ position: 'left', chain: [ { reply: '/ac alias 妙脆角' }, { img: '/images/Arcaea/t.webp' }, { msg: '[Tempestissimo]\n[1] 奥运会\n[2] 妙脆角\n[3] 对立打电话\n[4] 对立点外卖\n[5] 我没有买外卖\n[6] 我要杀光光\n[7] 暴风雨\n[8] 猫对立\n[9] 猫魔王\n[10] 电话拨号\n[11] 电话来啰\n[12] 风暴' } ] },
]">
	</neko-box>
</ClientOnly>


## 查询歌曲信息

查询歌曲信息，包括曲绘、定数等（可使用别名查询）

命令格式：

```text
/ac song <song_name>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac alias 猫光' },{ position: 'left', chain: [ { reply: '/ac alias 猫光' }, { img: '/images/Arcaea/t2.webp' }, { msg: '[Testify]\nArtist: void (Mournfinale) feat. 星熊南巫\nPack: finale\nBPM: 178\nRatings: 7 | 9.4 | 10.8 | 12' } ] },
]">
	</neko-box>
</ClientOnly>


## 定数表查询

列出指定定数以及 ±0.1 范围的所有谱面（如果存在），当定数 ≤8.0 时为 ±0.5。

命令格式：

```text
/ac rating <rating>
/ac r <rating>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac rating 9.8' },{ position: 'left', chain: [ { reply: '/ac rating 9.8' }, { img: '/images/Arcaea/rating.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## 谱面预览 <Badge type="warning" text="测试中" vertical="top" />

获取指定谱面的平面预览图。

::: warning
建议尽量使用 songid 进行请求。
:::

命令格式：

```text
/ac chart <song_name> [difficulty=ftr]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac chart 妙脆角 byd' },{ position: 'left', chain: [{ img: '/images/Arcaea/tempestissimo_3.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## 设置 b30 样式

设置 b30样式（推荐 v2)

- v0:列表

- v1:图标

- v2:新列表（推荐）

命令格式：

```text
/ac b30 set <style>
```

示例：

```text
/ac b30 set v2
```


## 设置 Recent 样式

设置 recent 样式：

- v0：Arcaea

- v1：Phigros

命令格式：

```text
/ac set <style_id>
```

示例：

```text
/ac set v0
```


## 添加别名

为指定歌曲添加别名。分隔符可以为 `</|\|_|,|\n|，>` 中的任意一个（建议使用 `，`）

命令格式：

```text
/ac adda <song_name>/<alias>[</|\|_|,|\n|，>alias]...
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac adda tempestissimo/风暴，妙脆角，猫魔王，我没有买外卖' },{ position: 'left', chain: [ { reply: '/ac adda tempestissimo/风暴，妙脆角，猫魔王，我没有买外卖' }, { msg: '[Tempestissimo]\nAdded 4 records.' } ] },
]">
	</neko-box>
</ClientOnly>


## 推分建议 <Badge type="danger" text="关闭" vertical="top" />

提供推分建议。可能需要很长时间查询，请勿重复查询。

::: warning
（未开发完成。暂不开放）
:::

命令格式：

```text
/ac suggest
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac suggest' },{ position: 'left', chain: [ { reply: '/ac suggest' }, { msg: '已开始计算。可能需要很长时间，请耐心等待，不要重复查询。' } ] },{ position: 'left', chain: [ { reply: '/ac suggest' }, { msg: '[推荐结果]' } ] },
]">
	</neko-box>
</ClientOnly>


## 音游王生成

生成指定谱面的理论值成绩图。

::: warning 注意
请勿滥用。此功能仅用于 recent 模板测试，不要真去当 yyw.jpg。滥用造成的后果由且仅由您个人承担。
:::

命令格式：

```text
/ac yyw <song_name> [difficulty=ftr]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac yyw 猫光 byd' },{ position: 'left', chain: [ { reply: '/ac yyw 猫光 byd' }, { img: '/images/Arcaea/yyw.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## 音游王生成（b30）

生成一张音游王 b30 成绩图（即最高理论 ptt 值）

::: warning 注意
请勿滥用。此功能仅用于 recent 模板测试，不要真去当 yyw.jpg。滥用造成的后果由且仅由您个人承担。
:::

命令格式：

```text
/ac yyw b30
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac yyw b30' },{ position: 'left', chain: [ { reply: '/ac yyw b30' }, { img: '/images/Arcaea/yywb30.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## 指定谱面成绩查询

查询指定谱面的成绩（默认难度为 ftr，如需要其他难度需要指定）。

命令格式：

```text
/ac info <song_name> [difficulty=ftr]
```

示例：

```text
/ac info ac
/ac info tempestissimo byd
/ac info 猫魔王
```


## 指定玩家 Recent 查询

获取指定玩家最近一次游玩成绩

命令格式：

```text
/ac usr <arc_id>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac usr SkisK49' },{ position: 'left', chain: [ { reply: '/ac usr SkisK49' }, { img: '/images/Arcaea/SkisK49.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## 指定玩家成绩查询

获取指定玩家指定谱面的游玩成绩（默认难度为 ftr）。

命令格式：

```text
/ac usrinfo <arc_id> <song_name> [difficulty=ftr]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac usrinfo SkisK49 Testify byd' },{ position: 'left', chain: [ { reply: '/ac usrinfo SkisK49 Testify byd' }, { img: '/images/Arcaea/SkisK49.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## Aua 排名查询 <Badge type="warning" text="测试中" vertical="top" />

查询您在 ptt 接近的玩家中的排名情况。可用来分析是否虚高或虚低。

::: warning 注意
**此命令会占用大量查分资源，请勿滥用**，可能需要较长时间响应，不要重复查询。
此结果仅表明您在**使用 Aua 查过分的玩家**中的排名，不反映真实的排行榜数据，因此可能偏低。仅供参考。
:::

命令格式：

```text
/acc [<song_name> [difficulty=ftr]]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/acc' },{ position: 'left', chain:[ {'reply': '/acc'}, { msg: 'specta 2 9316448 8.89\nYour ptt: 10.50\nAua play rank in 10.40~10.60: #197/208 (top 94.71%)\nAua play rank in 10.00~11.00: #1010/1066 (top 94.75%)' }] },{ position: 'right', msg: '/acc vividtheory' },{ position: 'left', chain:[ {'reply': '/acc vividtheory'}, { msg: 'vividtheory 2 10000850 10.80\nYour ptt: 10.50\nAua play rank in 10.40~10.60: #1/460 (top 0.22%)\nAua play rank in 10.00~11.00: #1/2184 (top 0.05%)' }] },
]">
	</neko-box>
</ClientOnly>


## Recent 查询

获取最近一次游玩成绩

示例：

```text
/ac
```


## test <Badge type="tip" text="开发者" vertical="top" /> <Badge type="warning" text="测试中" vertical="top" />

谱面难度分布查询。从 ptt 10.05~13.05，查看 Aua 查分玩家的 ptt-分数 分布图。可以用来分析谱面的真实难度、个人差、个人实力虚高/虚低情况等。

命令格式：

```text
/ac test dist <song_id> [difficulty=ftr]
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ac test dist testify byd' },{ position: 'left', chain: [{ img: '/images/Arcaea/testify.webp' }] },
]">
	</neko-box>
</ClientOnly>


## test2 <Badge type="tip" text="开发者" vertical="top" />

从 Aua 同步所有谱面信息。

命令格式：

```text
/ac test sync song
```


## test3 <Badge type="tip" text="开发者" vertical="top" />

从 Aua 同步所有歌曲别名。

命令格式：

```text
/ac test sync alias
```

