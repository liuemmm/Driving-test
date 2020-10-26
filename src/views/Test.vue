<template>
    <div class="">
        <div v-if="question">
            <div slot="header" class="clearfix">
                <p class="question">{{question}}</p>
                <el-divider></el-divider>
                <img :src="pic" class="image">
                <el-radio-group v-model="pick">
                    <div  v-for="item of options" class="opt-text">
                        <el-radio :label=item.key >{{item.text}}</el-radio>
                    </div>
                </el-radio-group>
            </div>
        </div>
        <div v-if="!question">
            <router-link to="/">没有选择题库，点击返回主页</router-link>
        </div>
        <el-button v-show="$route.params.id!=1" @click="handlerClick(-1)">上一题</el-button>
        <el-button v-show="$route.params.id!=$store.state.data.length" type="success" @click="handlerClick(1)">下一题</el-button>
        <el-button v-show="put" type="success" @click="handlerPut">提交</el-button>
    </div>
</template>

<script>
    export default {
        name: "Test",
        data(){
            return{
                index:0,
                question:'',
                options:[],
                pick:'',
                pic:'',
                count:0,
                put:false
            }
        },
        beforeMount() {
            if(this.$store.state.data){
                let k=['A','B','C','D']
                this.index=this.$route.params.id-1;
                this.pick=this.$store.state.data[this.index].pick;
                this.pic=this.$store.state.data[this.index].pic;
                this.question=this.$store.state.data[this.index].question;
                if(this.$store.state.data[this.index].option1==''){
                    this.options=[{text:'对',key:'对'},{text:'错',key:'错'}]
                }else{
                    for(let i=1;i<=4;i++){
                        this.options.push({
                            text:this.$store.state.data[this.index]['option'+i],
                            key:k[i-1]
                        })
                    }
                }
            }
        },
        methods:{
            handlerClick(to){
                this.$router.push(`/test/${this.$route.params.id-0+to}`)
            },
            handlerPut(){
                this.$router.push('/result')
            }
        },
        watch:{
            $route(){
                this.options=[]
                if(this.$store.state.data){
                    let k=['A','B','C','D'];
                    this.index=this.$route.params.id-1;
                    this.pick=this.$store.state.data[this.index].pick;
                    this.pic=this.$store.state.data[this.index].pic;
                    this.question=this.$store.state.data[this.index].question;
                    if(this.$store.state.data[this.index].option1==''){
                        this.options=[{text:'对',key:1},{text:'错',key:0}]
                    }else{
                        for(let i=1;i<=4;i++){
                            this.options.push({
                                text:this.$store.state.data[this.index]['option'+i],
                                key:k[i-1]
                            })
                        }
                    }
                }
            },
            pick(){
                this.$store.commit('setTestAns', {index:this.index, pick:this.pick});
                let flag=true;
                for(let i of this.$store.state.data){
                    if(i.pick==='') flag=false;
                }
                this.put=flag;
            }
        }
    }
</script>

<style scoped>
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

    .clearfix{
        line-height: 30px;
        text-align: start;
    }
    .image{
        width: 100%;
    }
    .opt-text{
        line-height: 30px;
    }
</style>
