<template>
    <div class="homeDiv">
        <el-button type='primary' class="btnItem" @click="goTo('/backTopOne')">去往页面1</el-button>
        <el-button type='primary' class="btnItem" @click="goTo('/login')">登录</el-button>
        <el-button type='primary' class="btnItem" @click="goTo('/puzzle')">拼图</el-button>
        <el-button type='primary' class="btnItem" @click="goTo('/axios')">axios</el-button>
        <el-button type='primary' class="btnItem" @click="goTo('/goduch')">AA计算器</el-button>
        <el-button type='primary' class="btnItem" @click="goTo('/test')">TEST</el-button>
    </div>
</template>

<script>
export default {
    name: 'Home',
    components: {},
    methods: {
        goTo( path ) {
            this.$router.push(path)
        }
    },
    mounted() {
        
    },

}
</script>

<style lang="less" scoped>
    .homeDiv{
        margin-top: 30px;
        margin-left: 30px;
    }
    .btnItem{
        margin-bottom: 30px;
    }
</style>
