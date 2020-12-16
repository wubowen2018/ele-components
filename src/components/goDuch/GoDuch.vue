<template>
  <div>
    <el-form v-model="memberForm" :rules="rules">
        <el-row :gutter="18" v-for="(item,index) in memberForm" :key="item.id">
          <el-col :span="8">
            <el-form-item prop="name">
              <el-input placeholder="好友姓名" v-model="item.name" clearable>
                <i slot="prefix" class="el-icon-user"></i>
              </el-input> 
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="money">
              <el-input placeholder="支付金额" v-model="item.money" clearable>
                <i slot="prefix" class="el-icon-coin"></i>
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" 
              class="el-icon-delete"
              :disabled=" (index ===0 || index ===1)? disabled : undisabled"  
              @click="delMem(index)"
              >
              </el-button>
          </el-col>
        </el-row>

      <el-form-item>
        <el-row :gutter="15">
          <el-col :span="12">
            <el-button 
              type="primary" 
              style="width: 100%" 
              @click="allReset"
            >Reset</el-button>
          </el-col>
          <el-col :span="12">
            <el-button 
              style="width: 100%" 
              class="el-icon-circle-plus-outline"
              @click="addMem"
            ></el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item>
            <el-button 
              type="primary" 
              style="width: 100%" 
              @click="getFair"
            >GoDuch</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    let checkMoney = ( rule, value,callback ) => {
      let reg = /\d+[\.]?\d+$/
      if ( reg.test(value) ) {
          callback()
      } else {
        if ( !value ) {
          return callback( new Error('请输入正确的支付金额'))
        }
      }
    }
    return {
      rules: {
        name: [
          { required: true, message: '好友姓名不可为空', trigger: 'blur' }
        ],
        money: [
          { validator: checkMoney, trigger: 'blur' }
        ]
      },
      memberForm: [] ,
      disabled: true,
      undisabled: false
    };
  },
  props: {
    memForm: {
      type: Array,
      required: true
    }

  },
  mounted() {
    this.memberForm = this.memForm
    // console.log(this.memberForm);
  },

  methods: {
    delMem(index){
      const memberForm = this.memberForm
      memberForm.splice( index, 1 )
      this.$message.success("success")
    },
    addMem(){
      const memberForm = this.memberForm
      let length = memberForm.length
      memberForm.push({
          name: '',
          money: '',
          id: length
      })
    },
    allReset(){
      const memberForm = this.memberForm
      memberForm.forEach(item => {
        item.name = ''
        item.money = ''
      });
    },
    getFair(){
      const memberForm = this.memberForm
      console.log(memberForm);
    }

  }
}

</script>
<style lang="less" scoped>

</style>