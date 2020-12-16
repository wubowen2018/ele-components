<template>
  <div class="wraper">
    <h2>AA计算器</h2>
    <go-duch
      :memForm="memForm"
      class="content">

    </go-duch>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memForm:[
        {
          name: '',
          money: '',
          show: true,
          id: 0
        },
        {
          name: '',
          money: '',
          show: true,
          id: 1

        }
      ]    
    }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang="less" scoped>
.wraper{width: 500px;text-align: center;position: relative;}
.content{left:30px;position: absolute;}
</style>