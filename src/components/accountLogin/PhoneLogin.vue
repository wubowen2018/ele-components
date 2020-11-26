<template>
    <div>
        <el-form :model="ruleForm" :rules="rules" ref="rulesForm">
            <el-form-item prop="phone">
                <el-input placeholder="请输入手机号" v-model="ruleForm.phone">
                    <i slot="prefix" class="el-icon-phone"></i>
                </el-input>
            </el-form-item>

            <el-form-item prop="code">
                <el-row :gutter="18">
                    <el-col :span="18">
                        <el-input placeholder="请输入验证码" v-model="ruleForm.code">
                            <i slot="prefix" class="el-icon-tickets"></i>
                        </el-input>    
                    </el-col>
                    <el-col :span="6">
                        <el-button @click="sendCode" :disabled="disabled">{{ btnTxt }}</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" style="width: 100%" @click="phoneLogin">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'PhoneLogin',
    data() {
        let checkPhone = ( rule, value,callback ) => {
            if ( !value ) {
                return callback(new Error('手机号不能为空') )
            } else {
                let reg = /^1[3|5|7|8|9][0-9]{9}$/
                if ( reg.test(value) ) {
                    callback()
                } else {
                    return callback( new Error('请输入正确的手机号') )
                }
            }
        }
        return {
                rules: {
                    phone: [
                        { validator: checkPhone, trigger: 'change' }
                    ],
                    code: [
                        { required: true, message: '验证码不能为空', trigger: 'blur' }
                    ]
                },
                disabled: false,
                btnTxt: '发送验证码',
                time: 0
        }
    },
    props: {
        ruleForm: {
            type: Object,
            required: true
        },
        countDown: {
            type: Number,
            default: 60
        }
    },
    methods: {
        sendCode() {
            //手机号必须输入正确，如果不正确，提示
            this.$refs.rulesForm.validateField( 'phone', errmessage => {
                //console.log(errmessage)
                if ( errmessage ) {
                    this.$message.error( errmessage )
                } else {
                    //倒计时
                    /**
                        1.时间开始倒数
                        2.按钮进入禁用状态
                        3.如果倒计时结束，按钮回复可用状态  按钮文字变为 重新发送 重置倒计时    
                        4.倒计时中 按钮文字为 xx秒后重新发送
                     */
                    let timer = setInterval( () => {
                            this.time --
                            this.btnTxt = `${this.time}s后重新发送`
                            this.disabled = true
                            if ( this.time === 0 ) {
                                this.btnTxt = `重新发送`
                                this.disabled = false
                                this.time = this.countDown
                                clearInterval(timer)
                            }
                        },1000)
                    this.$emit('send')
                }
            })
        },
        phoneLogin() {
            this.$refs.rulesForm.validate( valid => {
                if ( valid ) {
                    this.$emit('submit')
                } else {
                    this.$emit('errorHanle')
                }
            })
        }
    },
    mounted() {
        //避免直接操作父组件的数据，先接收 在操作
        this.time = this.countDown
    }
}

</script>
<style lang="less" scoped>
    
</style>