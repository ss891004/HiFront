# HiVUE


端的概念

前端，后端
pc端，android端，iPhone端




## vue.js
+ 构建数据驱动的web应用开发框架

+ MV※的模式 (MVC/MVP/MVVM)
+ + MVC: model view controller
+ + MVVM: 双向数据绑定， view的变动，映射在viewmodel， 反之一样。
+ + MVP： 

+ Vue实现数据绑定的原理
+ + https://cn.vuejs.org/v2/guide/reactivity.html


## Vue 环境
+ 安装  
+ 升级
```
npm -v 
npm install -g npm 或者  npm -g install npm@6.8.0


# 全局安装n
$ npm install -g n
# 升级到最新稳定版
$ n stable 
# 升级到最新版
$ n latest
# 升级到定制版
$ n v7.10.0
# 切换使用版本
$ n 7.10.0 (ENTER)

删除制定版本
n rm 7.10.0 

```

## Vue 基础
### 1. 模板语法
+ (1)插值
    + 文本 {{}}
    + 纯HTML (v-html ,防止XSS,CSRF)
    + 表达式
+ (2)指令:是带有 v- 前缀的特殊属性
    + v-bind
    + v-if v-show
    + v-on:click
    + v-for
+ (3)缩写
    + v-bind:src => :src
    + v-on:click => @click
    + 
### 2. class 与 style
+ (1)绑定HTML Class
    + 对象语法
    + 数组语法
+ (2)绑定内联样式
    + 对象语法
    + 数组语法

### 3. 条件渲染
    + (1)v-if
    + (2)v-else v-else-if
    + (3)template v-if ,包装元素template 不会被创建
    + (4)v-show
### 4. 列表渲染
+ (1)v-for (特殊 v-for="n in 10")
a. inb. of
+ (2)key:
*跟踪每个节点的身份,从而重用和重新排序现有元素
*理想的 key 值是每项都有的且唯一的 id。
+ (3)数组更新检测
a. 使用以下方法操作数组,可以检测变动
push() pop() shift() unshift() splice() sort() reverse()
b. filter(), concat() 和 slice() ,map(),新数组替换旧数组
c. 不能检测以下变动的数组
vm.items[indexOfItem] = newValue
*解决* (1)Vue.set(example1.items, indexOfItem, newValue)
(2)splice
+ (4)应用:显示过滤结果

### 5. 事件处理
+ (1)监听事件-直接触发代码
+ (2)方法事件处理器-写函数名
+ (3)内联处理器方法-执行函数表达式
+ (4)事件修饰符 https://cn.vuejs.org/v2/guide/events.html
+ (5)按键修饰符

### 6. 表单控件绑定/双向数据绑定
+ v-model
    + (1)基本用法
-购物车
    + (2)修饰符
        + .lazy :失去焦点同步一次
        + .number :格式化数字
        + .trim : 去除首尾空格



### axios与fetch实现数据请求



## 组件
+ 扩展HTML元素,封装可重用的代码
+ 组件注册方式
    + 全局组件  vue.component
    + 局部组件
+ 组件编写方式与vue实例的区别
    + 自定义组件需要一个root element
    + 父子组件的data无法共享
    + 组件可以有data,methods, computed... 但data必须是一个函数.








### 单文件组件
+ .vue 扩展名
```text
<template></template>
<script></script>
<style></style>
```

+ webpack

+ x.vue  => x.html 


+ vue 脚手架   (vue-cli)

+ vue create project_name 



+ vutra





### git

#### 本地仓库

- git init
- git add . 
- git status
- git commit -m 'xxxx'
- git log

- git reset --hard HEAD^
- git reset --hard HEAD^^


- git reflog
- git reset --hard xxxx


- git remote add origin https://xxxxx.git
- git push origin master:master

- git clone http://xxxxx.git
- git pull

#### 分支 

- git checkout -b dev

- git checkout dev
- git merge xxx
- git branch -d xxx 