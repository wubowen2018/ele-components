<template>
    <div class="wraper">
        <el-form :model="form" ref="ruleForm" label-width="100px">
            <el-form-item label="活动列表">
                <el-row v-for="(item, index) in form.activities" :key="index" style="margin-bottom: 20px;">
                    <el-col :span="11">
                        <el-form-item :label="`名称${index + 1}`" :prop="`activities.${index}.name`" :rules="rules.name">
                            <el-input v-model="item.name" placeholder="请输入活动名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="11">
                        <el-form-item :label="`主题${index + 1}`" :prop="`activities.${index}.content`" :rules="rules.content">
                            <el-input v-model="item.content" placeholder="请输入活动主题"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2" style="text-align:center; font-size: 16px" >
                        <i class="el-icon-circle-plus-outline" @click="addItem" v-if="index === 0"></i>
                        <i class="el-icon-remove-outline" @click="removeItem(index)" v-else></i>
                    </el-col>
                </el-row>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>


<script>
    export default {
    data () {
        return {
            form: {
                activities: [{
                    name: '',
                    content: ''
                }]
            },
            rules: {
                principal: [{ required: true, message: '请输入负责人', trigger: 'blur' }],
                name: [{ required: true, message: '请输入活动名称', trigger: 'blur' }],
                content: [{ required: true, message: '请输入活动主题', trigger: 'blur' }]
            }
        }
    },
    methods: {
        submitForm (formName) {
        this.$refs[formName].validate((valid) => {
            if (!valid) return console.log('未通过校验')
        })
        },
        addItem () {
        this.form.activities.push({
            name: '',
            content: ''
        })
        },
        removeItem (index) {
        this.form.activities.splice(index, 1)
        },
        resetForm (formName) {
        this.$refs[formName].resetFields()
        }
    }
}
</script>

<style lang="less" scoped>
    .wraper{
        margin-left: 30px;
        margin-top: 30px;
    }
</style>