<template>
  <div class="wrapper">
      <div class="left">
          <div class="main">
              <div class="character">{{ character }}</div>
          </div>
          <div class="bottom">
              <el-button type='primary' class="item" :disabled="isBeginDisabled" ref="beginDom" @click="start()">{{ beginText }}</el-button>
              <el-button type='warning' class="item" :disabled="isPauseDisabled" ref="pauseDom" @click="pause()">{{ pauseText }}</el-button>
              <el-button type='danger' class="item" :disabled="isStopDisabled" ref="stopDom" @click="stop()">{{ stopText }}</el-button>
          </div>
      </div>
      <div class="right">
          <div class="dataWraper">
            <div class="rightItem status">{{ sucOrFail }}</div>
            <div class="rightItem rate">{{ ratePercentage }}</div>
            <div class="rightItem countDown">{{ seconds }}</div>
          </div>
          <div class="rightBottom">
              <div class="rightText">All rights reserved by Jeremy</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        character: 'L',
        beginText: '开始',
        stopText: '停止',
        pauseText: '暂停',
        isBeginDisabled: false,
        isStopDisabled: true,
        isPauseDisabled: true,
        sucOrFail: 'WAITING',
        ratePercentage: '100%',
        seconds: 3,


    };
  },
  computed: {},
  mounted() {
      
  },
  beforeDestroy() {},
  methods: {
    start(){
        this.$message.success('ok')
        this.isBeginDisabled = true
        this.isPauseDisabled = false
        this.isStopDisabled = false

    },
    pause(){
        this.$message.error('xiexie!')
        this.isPauseDisabled = true
        this.isStopDisabled = false
        this.isBeginDisabled = false


    },
    stop(){
        this.$message.error('failed')
        this.isStopDisabled = true
        this.isPauseDisabled = true
        this.isBeginDisabled = true

    },
    
  }
}

</script>

<style lang="less" scoped>
.wrapper{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #f5f5f5;

    .left{
        flex: 1;
        display: flex;
        flex-direction: column;
        padding: 15px;

        .main{
            flex: 1;  
            display: flex;
            border: 1px solid #eee;
            box-sizing: border-box;
            border-radius: 5px;
            box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
            .character{
                flex: 1;
                color: aqua;
                font-weight: 500;
                font-size: 300px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
        .bottom{
            flex: 0 0 60px;
            display: flex;
            .item{
                margin: 10px;
                flex: 1;
            }

        }
    }
    .right{
        flex: 0 0 400px;
        display: flex;
        flex-direction: column;
        height: 100%;
        padding: 15px;
        .dataWraper{
            flex: 1;
            display: flex;
            flex-direction: column; 
            .rightItem{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid #eee;
                box-sizing: border-box;
                border-radius: 5px;
                box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.1);
            }
            .status{
                color: rgb(52, 162, 236);
            }
            .rate{
                margin-top: 20px;
                color: rgb(241, 180, 10);
            }
            .countDown{
                margin-top: 20px;
                font-weight: 700;
                color: rgb(235, 62, 19);
            }
        }
        .rightBottom{
            flex: 0 1 90px;
            display: flex;
            justify-content: center;
            align-items: center;
            .rightText{
                font-size: 14px;
                color: #999;
            }
            
        }
        

    }
}
</style>