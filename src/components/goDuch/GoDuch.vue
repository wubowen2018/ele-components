<template>
  <div>
    <el-form :model="memberForm" ref="memberForms" >
        <el-row :gutter="18" v-for="(item,index) in memberForm.memList" :key="index">
          <el-col :span="8">
            <el-form-item :prop="`memList.${index}.name`" :rules="rules.name">
              <el-input placeholder="好友姓名" v-model="item.name" clearable>
                <i slot="prefix" class="el-icon-user"></i>
              </el-input> 
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item :prop="`memList.${index}.money`" :rules="rules.money">
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
          <!-- 重置 -->
          <el-col :span="12">
            <el-button 
              type="primary" 
              style="width: 100%" 
              @click="allReset"
            >Reset</el-button>
          </el-col>
          <!-- 添加好友 -->
          <el-col :span="12">
            <el-button 
              style="width: 100%" 
              class="el-icon-circle-plus-outline"
              @click="addMem"
            ></el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <!-- 提交 -->
      <el-form-item>
            <el-button 
              type="primary" 
              style="width: 100%" 
              @click="getFair( memberForm.memList )"
            >GoDuch</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
export default {
  data () {
    let checkMoney = ( rule, value,callback ) => {
      let reg = /((^[1-9]\d*)|^0)(\.\d{0,2})?$/
      if ( !value ) {
        return callback( new Error('请输入支付金额'))
      }else {
        if ( !reg.test(value) ) {
          return callback( new Error('请输入正确的支付金额'))
        } else {
          callback()
        }
      }
    }
    return {
      memberForm: {
        memList: [
          {name: '', money: ''},
          {name: '',money: ''}
        ] 
      },
      rules: {
        name: [
          { required: true, message: '好友姓名不可为空', trigger: 'blur' },
          {min: 1,max: 6,message: '好友姓名在2-6个字符之间',trigger: 'blur'}
        ],
        money: [{ validator: checkMoney, trigger: 'blur' }]
      },
      radio:'',
      disabled: true,
      undisabled: false
    };
  },
  props: {
    
  },
  created() {},

  methods: {
    delMem(index){
      const memList = this.memberForm.memList
      memList.splice( index, 1 )
      this.$message.success("success")
    },
    addMem(){
      const memList = this.memberForm.memList
      let length = memList.length
      memList.push({
          name: '',
          money: '',
      })
    },
    allReset(){
      const memList = this.memberForm.memList
      memList.forEach(item => {
        item.name = ''
        item.money = ''
      });
    },
    getFair(memList){
      this.$refs.memberForms.validate( (valid) =>{
        if (valid){
          this.$emit('GoFairPage',memList);
        }else{
          this.$emit('handleErr');
        }
      })
    }

  }
}

</script>
<style lang="less" scoped>

</style>