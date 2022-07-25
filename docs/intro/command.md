# 命令响应

在多数平台上，AimuBot 使用**类命令行交互界面**的方式来解析用户输入的命令。

简单来说，AimuBot 只会处理与 预注册的命令 正则表达式 相符合的群聊消息。

AimuBot 使用正则表达式来匹配命令。一般的，其格式如下：

```re
^command\s?([\s\S]+)?
```

## 基本格式

AimuBot 命令的基本命令格式分为三个部分：

- 命令提示符
- 命令名称
- 命令参数

形如以下样例：

```text
/command <arg> <argA|argB> [optArg] [optArg2=default] [multiArg]...
```

其中，`/` 为命令提示符，`command` 为命令名称，`<arg>`、`<argA|argB>`、`[optArg]`、`[optArg2]` 和 `[multiArg]` 均为命令参数。

参数与命令之间、参数与参数之间需要用空格分开。但由于某些神秘的原因(懒)，参数与命令之间的空格有时可以省略掉。大多数情况下这并不会影响命令的使用，但还是建议加上空格。

目前可用的命令提示符有以下几种：

- 斜杠 `/`
- AimuBot 的名字 `稻荷爱萌`
- 在群聊中 `@AimuBot`

`<arg>`、`<argA|argB>`、`[optArg]` 和 `[multiArg]` 中的 `<>` 与 `[]` 是参数类型的标志。使用 `<>` 包含的为必要参数，`[]` 为可选参数。`...` 表示该括号中的格式可以重复任意次。

`<argA|argB>` 中的 `|` 为任选标志，代表该位置的参数可以是 `argA` 或 `argB` 中的任意一个。

`[optArg2=default]` 表示如果不提供 `optArg2` 参数，则使用 `default` 作为默认值。

::: tip 提示

需要注意的是要按照参数顺序输入，否则bot可能不会正确响应命令。

:::

::: warning 注意

使用时注意不要将 `<>`、`[]` 和 `|` 带进命令中。

:::

::: warning 注意

使用时注意不要将 `<>`、`[]` 和 `|` 带进命令中。

:::

::: danger 注意

重要的事情说三遍，使用时注意不要将 `<>`、`[]` 和 `|` 带进命令中。

真的有太多人这么做了，我哭了，呜呜。

:::

## 特殊格式

部分命令的解析格式可能不遵守上述的格式，称之为特殊格式。形如下方：

```text
https://github.com/xxx/yyy
@稻荷爱萌 来点猫猫
```

它们可能是某个命令的变体或替代格式，目的是为了简化命令格式，方便调用。

并不是每个命令都会有其特殊格式，但是一定保证有一个基本格式。

## 指令示例

指令示例将会写在对话框中，例如下面这样：

<ClientOnly>
    <neko-box :messages="[
        { position: 'right', msg: '这是一条指令示例' },
        { position: 'left', msg: '这是bot可能的输出结果' },
        { position: 'right', msg: '这又是一条指令示例' },
        { position: 'left', chain: [{ reply: '指令示例' }, { msg: '这是bot可能的回复' }] },
        { position: 'center', msg: '你 👉戳了戳 稻荷爱萌' },
        { position: 'left', msg: '这是bot对戳一戳事件可能的输出' },
        { position: 'right', msg: '这是可能产生复杂输出的指令' },
        { position: 'left', chain: [{ reply: '指令' }, { at: '@user' }, { msg: '[表情包：猫猫] 6' }, { img: '/images/18.gif' }, { msg: 'awawawa' }] },
    ]">
    </neko-box>
</ClientOnly>

> 这并没有使用 [Vuetify](https://vuetifyjs.com/) 提供的 Material Design 框架，因为他和 VuePress `^2.0.0-beta.48` 和 Vite 兼容性都不太好，并且会污染整个文档的 CSS。这里手搓了一个 [NekoBox.vue](https://github.com/InariAimu/AimuBot.Docs/blob/main/docs/.vuepress/components/NekoBox.vue) 组件，模仿自 [mokabot2](https://docs-mokabot.arisa.moe/plugins/) 与 nonebot2（2.0.0a16） [文档](https://61d3d9dbcadf413fd3238e89--nonebot2.netlify.app/guide/cqhttp-guide.html#%E5%8E%86%E5%8F%B2%E6%80%A7%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E5%AF%B9%E8%AF%9D) 的 Messenger 组件。
