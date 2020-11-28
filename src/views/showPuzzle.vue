<template>
    <div class="wraper">
        <div class="box">
            <d-puzzle 
                class="puzzleContent"
                @next="handleNext"
                v-bind="puzzleConfig[level]">
            </d-puzzle>
        </div>
        <div class="boxBtn">
            <el-button type="primary" class="btn1" @click="preLevel">上一关</el-button>
            <el-button type="primary" class="btn2" @click="handleNext">下一关</el-button>
        </div>
        <img :src="puzzleConfig[level].img" class="imgDiv" />
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
                { row: 4, col: 4, img: './02.jpg' },
                { row: 5, col: 5, img: './03.jpg' },
                { row: 6, col: 6, img: './04.jpg' }
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
                } else {
                    this.level = this.level - 1
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
        height: 100%;
        width: 100%;
    }
    .box{
        position: relative;
        width: 100%
    }
    .puzzleContent{
        position: absolute;
        top: 30px;
        left: 50%;
        margin-left: -250px;
    }
    .boxBtn{
        position: absolute;
        width: 500px;
        height: 50px;
        margin-top: 560px;
        left: 50%;
        margin-left: -250px;
        .btn1{
            position: absolute;
            left: 15px;
        }
        .btn2{
            position: absolute;
            right: 15px;
        }
    }
    .imgDiv{
        position: absolute;
        top: 30px;
        width: 200px;
        height: 200px;
        left: 10px;;
    }
</style>