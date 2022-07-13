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
		{ position: 'right', msg: '/ac bind 559842662' },{ position: 'left', chain: [{ reply: '/ac bind InariAimu' }, { msg: '已绑定 InariAimu/559842662 (12.92)' } ] },
]">
	</neko-box>
</ClientOnly>


## 保存分数 <Badge type="warning" text="测试中" vertical="top" />

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

查询别名

命令格式：

```text
/ac alias <song_name>
```

示例：

```text
/ac alias 妙脆角
```


## 查询歌曲信息

查询歌曲信息，包括曲绘、定数等（可使用别名查询）

命令格式：

```text
/ac song <song_name>
```

示例：

```text
/ac song tempestissimo
/ac song 我没有买外卖
```


## 定数表查询

列出指定定数以及 ±0.1 范围的所有谱面（如果存在），当定数 ≤8.0 时为 ±0.5。

命令格式：

```text
/ac rating <rating>
/ac r <rating>
```

示例：

```text
/ac rating 9.9
/ac r 11.4
```


## 谱面预览 <Badge type="warning" text="测试中" vertical="top" />

获取指定谱面的平面预览图。

::: warning 注意
`Final Verdict` 中的一些谱面目前渲染不正常，正在修复中。
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

```text
/ac adda tempestissimo/风暴，妙脆角，猫魔王，我没有买外卖
```


## 音游王生成

生成指定谱面的理论值成绩图

::: warning 注意
请勿滥用
:::

命令格式：

```text
/ac yyw <song_name> [difficulty=ftr]
```

示例：

```text
/ac yyw 猫光 byd
/ac yyw 病女
```


## 音游王生成（b30）

生成一张音游王 b30 成绩图（即最高理论 ptt 值）

::: warning 注意
请勿滥用
:::

示例：

```text
/ac yyw b30
```


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
此结果仅表明您在使用 Aua 查分的玩家中的排名，不反映真实的排行榜数据，因此可能偏高。仅供参考。
:::

命令格式：

```text
/acc [<song_name> [difficulty=ftr]]
```

示例：

```text
/acc
/acc 骨折光
/acc 风暴 byd
```


## Recent 查询

获取最近一次游玩成绩

示例：

```text
/ac
```


## test <Badge type="tip" text="开发者" vertical="top" />

Arcaea 测试功能

命令格式：

```text
/ac test <song_id>
```


## test2 <Badge type="tip" text="开发者" vertical="top" />

Arcaea 测试功能2

命令格式：

```text
/ac test2
```


## test3 <Badge type="tip" text="开发者" vertical="top" />

Arcaea 测试功能3

命令格式：

```text
/ac test3
```

