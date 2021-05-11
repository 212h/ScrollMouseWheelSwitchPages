<template>
    <div>

        <div class="wrap" :style="{ height: screenHeight + 'px' }">
            <div id="main" class="main" :style="{ top: nowTop + 'px' }">
                <ul class="pageUl" type="circle">
                    <li @click="liBtn(1)" :class="{'active': curIndex == 1}">&nbsp;</li>
                    <li @click="liBtn(2)" :class="{'active': curIndex == 2}">&nbsp;</li>
                    <li @click="liBtn(3)" :class="{'active': curIndex == 3}">&nbsp;</li>
                    <li @click="liBtn(4)" :class="{'active': curIndex == 4}">&nbsp;</li>
                    <li @click="liBtn(5)" :class="{'active': curIndex == 5}">&nbsp;</li>
                </ul>
                <div style="background-color: #1b6d85" class="page">第1页</div>
                <div style="background-color: #5cb85c" class="page">第2页</div>
                <div style="background-color: #8a6d3b" class="page">第3页</div>
                <div style="background-color: #337ab7" class="page">第4页</div>
                <div style="background-color: #66512c" class="page">第5页</div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'Home',
        components:{
        },
        data() {
            return {
                screenWeight: 0,    // 屏幕宽度
                screenHeight: 0,    // 屏幕高度
                index: 1,        // 用于判断翻页
                curIndex: 1,      // 当前页的index
                startTime: 0,      // 翻屏起始时间
                endTime: 0,       // 上一次翻屏结束时间
                nowTop: 0,       // 翻屏后top的位置
                pageNum: 0,       // 一共有多少页
                main: Object,
                obj: Object
            }
        },
        mounted() {
            this.screenWeight = document.documentElement.clientWidth;
            this.screenHeight = document.documentElement.clientHeight;
            this.main = document.getElementById("main");
            this.obj = document.getElementsByTagName("div");
            for (let i = 0; i < this.obj.length; i++) {
                if (this.obj[i].className == 'page') {
                    this.obj[i].style.height = this.screenHeight + "px";
                }
            }
            this.pageNum = document.querySelectorAll(".page").length;

            // 浏览器兼容
            if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)) {
                document.addEventListener("DOMMouseScroll", this.scrollFun, false);
            } else if (document.addEventListener) {
                document.addEventListener("mousewheel", this.scrollFun, false);
            } else if (document.attachEvent) {
                document.attachEvent("onmousewheel", this.scrollFun);
            } else {
                document.onmousewheel = this.scrollFun;
            }
        },
        methods: {
            liBtn(idx) {
                let cha = 0;
                cha = idx - this.curIndex;
                if (cha > 0) {
                    // 页码增大
                    this.index += cha;
                    this.toPage(this.index);
                } else if (cha < 0) {
                    // 页码减小
                    this.index += cha;
                    this.toPage(this.index);
                } else {
                    //cha=0 是 当前页
                }
            },
            scrollFun(event) {
                this.startTime = new Date().getTime();
                // mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
                // DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
                let delta = event.detail || (-event.wheelDelta);
                // 如果当前滚动开始时间和上次滚动结束时间的差值小于1.5s，则不执行翻页动作，这样做是为了实现类似节流的效果
                if ((this.startTime - this.endTime) > 500) {
                    if (delta > 0 && parseInt(this.main.offsetTop) >= -(this.screenHeight * (this.pageNum - 2)) && this.index < 5) {
                        // 向下滚动
                        this.index++;
                        this.toPage(this.index);
                    } else if (delta < 0 && parseInt(this.main.offsetTop) < 0 && this.index > 1) {
                        // 向上滚动
                        this.index--;
                        this.toPage(this.index);
                    }
                    // 本次翻页结束，记录结束时间，用于下次判断
                    this.endTime = new Date().getTime();
                }
            },
            // 翻页
            toPage(index) {
                if (index != this.curIndex) {
                    let delta = index - this.curIndex;
                    this.nowTop = this.nowTop - delta * this.screenHeight;
                    this.curIndex = index;
                }
            }
        }
    }
</script>
<style>
    @import "Home.scss";
</style>