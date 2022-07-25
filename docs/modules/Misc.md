# 杂项

杂项功能


## 帮您选择

从几个选项中选择一个。

命令格式：

```text
/roll <option>[< |,|，><option>]...
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/roll fktx fkucn fk616' },{ position: 'left', msg: '我觉得还是选fktx' },{ position: 'right', msg: '/roll 肯德基，麦当劳，不吃' },{ position: 'left', msg: '那我建议你选择不吃' },
]">
	</neko-box>
</ClientOnly>


## 生成猫猫语 <Badge type="danger" text="关闭" vertical="top" />

将一段话按照拼音声调替换为 `喵苗秒妙`。如果想知道此功能到底是什么意思，请念一下生成的文本。

命令格式：

```text
/mmmm <content>
/喵苗秒妙 <content>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/mmmm 韵律源点Arcaea是我玩过最好玩的手游，游戏没有任何缺点，维护时间长是为了更好的游戏体验，未知问题也很正常只是我没见过世面，游戏卡顿是我手机问题，游戏服务器如丝般顺滑，游戏体力不多为了保护视力减少盯屏幕时间，一首歌2体爬梯高效又快捷，不仅如此官方还大量更新可爱角色有用技能，活动奖励丰富又不肝，体验极好，是手游之鉴，游戏界面非常整洁，角色立绘十分可爱，歌曲难度适中，游戏体验非常好。打不了的歌都是我手和脑子不配，错过活动之类的都是风水不好，成绩上传不了是我家路由器没买对。' },{ position: 'left', msg: '妙妙苗秒Arcaea妙秒苗妙妙秒苗喵~秒苗，苗妙苗秒妙苗喵秒，苗妙苗喵秒妙苗喵~妙秒喵~苗妙秒妙，妙喵妙苗秒秒妙苗秒妙秒苗妙妙妙妙，苗妙秒妙妙秒秒喵妙苗，苗妙苗妙妙苗喵喵妙苗，苗妙秒妙妙喵苗喵~秒妙妙妙秒秒喵苗妙苗喵，喵秒喵2秒苗喵喵妙妙妙苗，妙秒苗秒喵喵苗妙妙妙喵秒妙秒妙秒妙妙苗，苗妙秒妙喵妙妙妙喵，秒妙苗秒，妙秒苗喵妙，苗妙妙妙喵苗秒苗，秒妙妙妙苗喵秒妙，喵秒苗妙妙喵，苗妙秒妙喵苗秒。秒妙喵~喵~喵喵妙秒秒苗秒喵~妙妙，妙妙苗妙喵妙喵~喵妙喵秒妙秒，苗妙妙苗妙喵~妙秒喵妙苗妙苗秒妙。' },
]">
	</neko-box>
</ClientOnly>


## 生成Guy发言

生成Guy先生的Discord发言。

命令格式：

```text
/guy <content>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: '/guy 616sb' },{ position: 'left', chain: [{ img: '/images/Misc/guy.webp' } ] },
]">
	</neko-box>
</ClientOnly>


## Github parser

将 Github url 链接解析为图片（适用于repo,issue等）

命令格式：

```text
<Github_repo_url>
```

示例：

<ClientOnly>
	<neko-box :messages="[
		{ position: 'right', msg: 'https://github.com/InariAimu/aimubot' },{ position: 'left', chain: [{ img: '/images/Misc/gh.webp' } ] },
]">
	</neko-box>
</ClientOnly>

