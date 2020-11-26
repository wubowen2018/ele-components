<template>
    <div class="wraper">
        <h2>普通登录组件</h2>
        <div class="acccount">
            <account-login @submit="submit" @errHandle="errHandle" :rule-form="ruleForm" :rules="rules">
            </account-login>
        </div>
        <h2>短信验证码登录组件</h2>
        <div class="phoneLogin">
            <phone-login :rule-form="phoneForm" @send="send" @submit="submit" @errHandle="errHandle" ></phone-login>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            //绑定表单
            ruleForm: {
                username: '',
                password: ''
            },
            //校验规则
            rules: {
                username: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 6,
                        message: '用户名在2-6个字符之间',
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 6,
                        max: 15,
                        message: '密码在6-15个字符之间',
                        trigger: 'blur'
                    }
                ]
            },
            phoneForm: {
                phone: '',
                code: ''
            }
        }
    },
    props: {

    },
    methods: {
        submit() {
            console.log(this.ruleForm.username)
            this.$message.success('提交成功')
        },
        errHandle() {
            this.$message.error('表单填写有误，验证失败，请检查。')
        },
        send() {
            //发送验证码的逻辑
            this.$message.info('发送验证码成功')
        }
    },
    mounted() {

    }
}

</script>
<style lang="less" scoped>
    .wraper{
        
        margin-left: 30px;
        margin-top: 30px;
        .acccount,.phoneLogin{
            width: 500px;
        }
    }
</style>