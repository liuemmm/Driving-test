<template>
    <div class="">
        正确率：
        <el-progress type="circle" :percentage="result" :color="color"></el-progress>
        <span :style="{color}">{{count}}</span><span class="text-len">/{{this.$store.state.data.length}}</span>
        <router-link to="/"><el-button type="success">再来一次</el-button></router-link>
        <el-divider content-position="center">答案解析</el-divider>
        <div v-for="o in errQuestion"  class="text item box-card">
            <el-divider></el-divider>
            <div slot="header" class="clearfix">
                <span>题目：{{o.question}}</span>
            </div>
            <div v-show="o.option1">
                {{o.option1}}
            </div>
            <div v-show="o.option2">
                {{o.option2}}
            </div>
            <div v-show="o.option3">
                {{o.option3}}
            </div>
            <div v-show="o.option4">
                {{o.option4}}
            </div>
            <div class="ans">答案：{{o.answer}}</div>
            <div  class="text item">
                <span class="explain">解析：{{o.explain}}</span>
            </div>
        </div>
        <router-link to="/"><el-button type="success">再来一次</el-button></router-link>
    </div>
</template>

<script>
    export default {
        name: "Result",
        data() {
            return {
                result: 100,
                color: '#67C23A',
                errQuestion: [],
                count:0
            }
        },
        beforeMount() {
            let data = this.$store.state.data;
            for (let i = 0; i < data.length; i++) {
                if (data[i].answer == data[i].pick) this.count++;
                else {
                    this.errQuestion.push(data[i])
                }
            }
            this.result = this.count / data.length * 100;
            if (this.result >= 90) this.color = '#67C23A';
            else if (this.result >= 70) this.color = '#E6A23C';
            else if (this.result >= 50) this.color = '#909399';
            else this.color = '#F56C6C';
        },
        computed: {}
    }
</script>

<style scoped>
    .text {
        font-size: 14px;
        text-align: start;
        line-height: 40px;
    }

    .item {
        padding: 18px 0;
    }

    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }
    .explain{
        color: #F56C6C;
    }
    .ans{
        color:#67C23A;
    }
    .text-len{
        font-size: 30px;
        color: #67C23A;
    }
</style>
