<template>
  <div id="app">
    <el-container>
      <el-header>{{$store.state.headerTitle}}</el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  export default {
    name:'App',
    components:{
    },
    beforeMount() {
      let data=JSON.parse(localStorage.getItem('data'));
      this.$store.commit('setData',data);
    }
    ,
    watch:{
      '$route.path'(){
        this.$store.commit('setHeaderTitle',this.$route.name)
      }
    }
  }
</script>
<style>
  .el-header, .el-footer {
    background-color: rgb(64,158,255);
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    text-align: center;
    line-height: 100px;
  }

  .el-main {
    color: #333;
    text-align: center;
    line-height: 80px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
