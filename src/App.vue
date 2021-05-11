<template>
  <div id="app">
    <router-view />
  </div>
</template>
<style lang="scss">

#app {
  font-family: Noto Sans SC, "Open Sans", Arial, sans-serif;
  font-style: normal;
  font-weight: 400; //| Regular | 400 (default) |
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-size: 14px;
  min-width: 1200px;
  overflow: auto;
  background-color: #fff;
  height: 100%;
  letter-spacing: 1px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box !important;
  -webkit-font-smoothing: subpixel-antialiased;
  -webkit-font-smoothing: antialiased;
  word-break: break-all; /* 单词截断自动换行; */
  word-break: break-word; /* 标点符号截断自动换行; */
  white-space: normal;
}
a {
  text-decoration: none !important;
}
img {
  vertical-align: middle;
}
input {
  outline: none;
  border: 0;
}
body {
  height: 100%;
  min-width: 768px;
}
/*外阴影*/
.boxShodow {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12);
}
/*超过一行显示省略号*/
.ellipsis {
  white-space: nowrap; /*不允许换行*/
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 10px;
  background-color: rgba(193, 193, 193, 0.5);
}
/* 滚动条的滑块 */
::-webkit-scrollbar-thumb {
  background-color: rgba(193, 193, 193, 0.5) !important;
  border-radius: 3px;
  box-shadow: inset 0 0 2px rgba(193, 193, 193, 0.5) !important;
  -webkit-box-shadow: inset 0 0 2px rgba(193, 193, 193, 0.5) !important;
}
.scale {
  transition: all 0.5s linear;
}
.scale:hover {
  transform: scale(1.1);
}
/deep/ .el-drawer:focus {
  outline: none !important;
}
.hover:hover {
  cursor: pointer;
}

/*  段落开头两个字空格*/
.paragraphBeginning {
  text-align: left;
  text-indent: 2em;
  padding-bottom: 10px;
}
/*解决IE 自带的密码框 小眼睛与输入框X符号*/
input::-ms-clear {
  display: none;
} /*删除文本框中的叉号*/
input::-ms-reveal {
  display: none;
} /*删除密码框中的小眼睛*/
.nodataParentContainer {
  height: 100%;
}
// 可复制 文本
span {
  -moz-user-select: text; /* Firefox私有属性 */
  -webkit-user-select: text; /* WebKit内核私有属性 */
  -ms-user-select: text; /* IE私有属性(IE10及以后) */
  -khtml-user-select: text; /* KHTML内核私有属性 */
  -o-user-select: text; /* Opera私有属性 */
  user-select: text; /* CSS3属性 */
}

// css不可复制
.noSelect{
  -moz-user-select:none; /* Firefox私有属性 */
  -webkit-user-select:none; /* WebKit内核私有属性 */
  -ms-user-select:none; /* IE私有属性(IE10及以后) */
  -khtml-user-select:none; /* KHTML内核私有属性 */
  -o-user-select:none; /* Opera私有属性 */
  user-select:none; /* CSS3属性 */
}
</style>
