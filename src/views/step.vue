<template>
    <div>
        <el-steps :space="200" :active="1" finish-status="success">
        <el-step title="已完成"></el-step>
        <el-step title="进行中"></el-step>
        <el-step title="步骤 3"></el-step>
        </el-steps>
    </div>
</template>

<script>
export default {
  data () {
    return {
       active: 0      
    };
  },

  components: {},

  computed: {},

  mounted() {},

  beforeDestory() {},

  methods: {
      next() {
        if (this.active++ > 2) this.active = 0;
      }
  }
}

</script>
<style scoped>
</style>