<template>
    <div class="wraper">
        <div class="content">
            <d-puzzle 
                @next="handleNext"
                v-bind="puzzleConfig[level]">
            </d-puzzle>
        </div>
        <div class="box">
            <el-button type="primary" @click="preLevel">上一关</el-button>
            <el-button type="primary" @click="handleNext">下一关</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'showPuzzle',
    data() {
        return {
            level: 0,
            puzzleConfig: [
                { row: 3, col: 3, img: './01.jpg' },
                { row: 4, col: 4, img: './01.jpg' },
                { row: 5, col: 5, img: './01.jpg' }
            ]
        }
    },
    props: {

    },
    methods: {
        handleNext() {
            if ( ++ this.level === this.puzzleConfig.length ) {
                const answerFlag = window.confirm('已经是最后一关了，要重新开始吗？')
                if ( answerFlag ) {
                    this.level = 0
                }
            }
        },
        preLevel(){
            if ( this.level > 0 ) {
                this.level --
            } else {
                this.$message.error('已经是第一关了！')
            }
        }
    },
    mounted() {}
}

</script>
<style lang="less" scoped>
    .wraper{

        position:absolute;
        margin-top: 30px;
        margin-left: 30px;
      

        .box{
            margin-top: 30px;
        }
    }
</style>