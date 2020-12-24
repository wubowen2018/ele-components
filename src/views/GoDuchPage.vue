<template>
  <div class="wraper">
    <h2>AA计算器</h2>
    <go-duch
      class="content"
      @GoFairPage="GoFairPage"
      >
      
    </go-duch>
  </div>
</template>

<script>
export default {
  data () {
    return {
   
    }
  },

  components: {},

  computed: {},

  methods: {
    GoFairPage(memList){
      this.$router.push({
        name:'ShowFair',
        params:{
          memList:memList
        }
      });
      //console.log(memList);
    }
  }
}

</script>
<style lang="less" scoped>
.wraper{width: 500px;text-align: center;position: relative;}
.content{left:30px;position: absolute;}
</style>