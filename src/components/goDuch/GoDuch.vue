<template>
  <div>
    <el-form v-model="memberForm">
      <el-form-item 
      v-for="(index,item) in memberForm"
      :key="item.id"
      >
        <el-row :gutter="12">
          <el-col :span="8">
            <el-input placeholder="好友姓名" v-model="item.name">
              <i slot="prefix" class="el-icon-user"></i>
            </el-input>    
          </el-col>

          <el-col :span="14">
            <el-input placeholder="支付金额" v-model="item.money">
              <i slot="prefix" class="el-icon-coin"></i>
            </el-input>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" :disabled="item.show" class="el-icon-delete"></el-button>
          </el-col>
        </el-row>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      memberForm: [] 
    };
  },
  props: {
    memForm: {
      type: Array,
      required: true
    }
  },
  components: {},

  computed: {},

  mounted() {
    this.memberForm = this.memForm
    console.log(this.memberForm);
  },

  methods: {}
}

</script>
<style lang="less" scoped>

</style>