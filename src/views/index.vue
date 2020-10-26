<template>
    <div class="index-page">
        <div>
            <el-radio v-model="subject" label="1" border>科目一</el-radio>
            <el-radio v-model="subject" label="4" border>科目四</el-radio>
        </div>
        <div>
            <el-radio v-model="type" label="A1" border size="small">A1驾照</el-radio>
            <el-radio v-model="type" label="A2" border size="small">A2驾照</el-radio>
        </div>
        <div>
            <el-radio v-model="type" label="B1" border size="small">B1驾照</el-radio>
            <el-radio v-model="type" label="B2" border size="small">B2驾照</el-radio>
        </div>
        <div>
            <el-radio v-model="type" label="C1" border size="small">C1驾照</el-radio>
            <el-radio v-model="type" label="C2" border size="small">C2驾照</el-radio>
        </div>
        <div>
            <el-select v-model="value" placeholder="请选择">
                <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                </el-option>
            </el-select>
        </div>
        <el-button type="primary" @click="playTest">开始答题</el-button>
    </div>
</template>

<script>
    import getData from "../api/getData";

    export default {
        name: 'Index',
        data() {
            return {
                subject: '1',
                type: 'C1',
                options: [{
                    value: '10',
                    label: '10道题'
                }, {
                    value: '20',
                    label: '20道题'
                }, {
                    value: '50',
                    label: '50道题'
                }, {
                    value: '9999',
                    label: '全部题目'
                }],
                value: '10'
            }
        },
        components: {},
        mounted() {
            localStorage.clear()
        },
        methods: {
            playTest() {
                getData(this.$store, {
                    type: this.type,
                    subject: this.subject,
                    pagesize: this.value,
                }).then(()=>{
                    this.$router.push('/test')
                })
            }
        }
    }
</script>
<style scoped>

</style>
