# PythonInterop

一些 Python 功能


## 反汇编（arm）

Arm 反汇编

T/A: Thumb/Arm

</>: 大小端序

base_addr: 基地址

asm_hexcode: 机器码

命令格式：

```text
/py-dasm [T|A][<|>] <base_addr>
<asm_hexcode>
```

示例：

```text
/py-dasm T<
1A 0C
```


## 汇编（arm）

Arm 汇编

命令格式：

```text
/py-asm <asm_code>
```

示例：

```text
/py-asm
IT AL
NOP
```

