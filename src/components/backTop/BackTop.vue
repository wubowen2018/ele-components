<template>
    <div class="pages-content-scroll">
        <el-backtop target=".pages-content-scroll"></el-backtop>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "BackTop",
    data() {
        return {

        }
    },
    methods: {}
}
</script>

<style lang="less" scoped>
    .pages-content-scroll {
        /* 必须撑满这个屏幕*/
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-x: hidden;
    }
</style>