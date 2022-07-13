# 信息

Bot信息模块


## 网络检查 <Badge type="tip" text="开发者" vertical="top" />

检查bot网络状况:

- google

- google proxy

- github

- github proxy

命令格式：

```text
/test-net
```


## Bot数据

显示 Bot 运行数据

命令格式：

```text
/cs stat
```


## Ping！

检查 bot 在线状态。回复可能是 Konata, Kagami, Tsukasa, Miyuki 中的任意一个。

命令格式：

```text
/ping
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/ping' },{ position: 'left', msg: 'Hello, I\'m Kagami' },
]">
	</neko-box>
</ClientOnly>

