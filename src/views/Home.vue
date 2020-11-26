<template>
    <div class="homeDiv">
        <el-button type='primary' @click="goTo('/backTopOne')">去往页面1</el-button>
        <el-button type='primary' @click="goTo('/login')">登录</el-button>
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
    }

}
</script>

<style lang="less" scoped>
    .homeDiv{
        margin-top: 30px;
        margin-left: 30px;
    }
</style>
