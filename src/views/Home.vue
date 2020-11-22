<template>
    <div>
        <el-button type='primary' @click="goTo('/backTopOne')">去往页面1</el-button>
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
