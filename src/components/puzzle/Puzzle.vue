<template>
    <div class="puzzle" :style="{width: width+'px',height: height+'px'}">
        <div 
            class="puzzleBlock"
            v-for="(item, index) in bolckPoints"
            :key="item.id"
            :style="{
                width: blockWidth + 'px',
                height: blockHeight + 'px',
                left: item.x + 'px',
                top: item.y + 'px',
                backgroundImage: `url(${img})`,
                backgroundPosition: `-${correctPoints[index].x}px -${correctPoints[index].y}px`,
                opacity: index === bolckPoints.length -1 && 0
            }"
            @click="handleClick"
            :ref="index === bolckPoints.length -1 ? 'empty' : 'block'"
            :data-correctX = "correctPoints[index].x"
            :data-correctY = "correctPoints[index].y"
        />
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {

        }
    },
    props: {
        width:{
            type: Number,
            default: 500
        },
        height:{
            type: Number,
            default: 500
        },
        row: {
            type: Number,
            default: 3 
        },
        col: {
            type: Number,
            default: 3 
        },
        img: {
            type: String,
            required: true
        }
    },
    methods: {
        handleClick( e ) {
            const blockDom = e.target
            const emptyDom = this.$refs.empty[0]
            //判断是否可移动
            // if ( !this.isAdjacent( blockDom, emptyDom ) ) {
            //     return
            // }
            const { left, top } = blockDom.style
            blockDom.style.left = emptyDom.style.left
            blockDom.style.top = emptyDom.style.top
            emptyDom.style.top = top
            emptyDom.style.left = left
            const winFlag = this.checkWin()
            if (winFlag) {
                this.winGame( emptyDom )
            }
            //console.log(blockDom)
        },
        isAdjacent( blockDom, emptyDom ) {
            const { left:domLeft, top:domTop, width, height } = blockDom.style
            const { left:emptyLeft, top:emptyTop } = emptyDom.style
            const xDis = Math.floor(Math.abs(parseFloat(domLeft) - parseFloat(emptyLeft)))
            const yDis = Math.floor(Math.abs(parseFloat(domTop) - parseFloat(emptyTop)))
            const flag = ( domLeft === emptyLeft && yDis === parseInt(height) ) 
                      || ( domTop ===  emptyTop && xDis === parseInt(width) )
            return flag
        },
        checkWin(){
            const blockDomArr = this.$refs.block
            return blockDomArr.every( dom => {
                const { left:domLeft, top:domTop } = dom.style
                const { correctx:correctX, correcty:correctY } = dom.dataset
                const flag = parseInt(domLeft) === parseInt(correctX) && parseInt(domTop) === parseInt(correctY)
                return flag
            })
        },
        winGame( emptyDom ) {
            setTimeout( ()=>{
                this.$message.success('恭喜您！完成拼图！')
                emptyDom.style.opacity = 1
                setTimeout( ()=>{
                    this.goToNextLevel()
                },900)
            },300)
        },
        goToNextLevel() {
            const answerFlag = window.confirm('要玩下一关吗？')
            if ( answerFlag ) {
                this.$emit('next')
            }
        }
    },
    computed: {
        blockWidth() {
            return this.width / this.col
        },
        blockHeight() {
            return this.height / this.row
        },
        correctPoints(){
            const { row, col, blockWidth, blockHeight } = this
            const arr = []
            for( let i = 0; i < row; i++ ) {
                for ( let j = 0; j < col; j++ ) {
                    arr.push({
                        //left 列数*块宽
                        x: j * blockWidth,
                        //top 行数* 块高
                        y: i * blockHeight,
                        id: new Date().getTime() + Math.random() * 100
                    })
                }
            }
            return arr
        },
        bolckPoints() {
            const points = this.correctPoints
            const length = points.length
            //取出最后一个元素
            const lastEle = points[length - 1]
            const newArr = [...points]

            newArr.length = length - 1
            //乱序
            newArr.sort( () => Math.random() - 0.5)
            newArr.push(lastEle)
            return newArr
        }
    },
    mounted() {}
}

</script>
<style lang="less" scoped>
    .puzzle{
        position: relative;
        border: 2px solid #cccccc;
    }
    .puzzleBlock{
        box-sizing: border-box;
        position:absolute;
        transition: all .3s;
        /*background-color: red;*/
        border: 1px solid #ffffff;
    }
</style>