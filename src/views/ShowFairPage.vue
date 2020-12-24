<template>
    <div>
        aaa
    </div>
</template>

<script>
export default {
    name: '',
    data() {
        return {
            memList: ''
        }
    },
    computed: {
        
    },

    methods: {

    },
    mounted() {
        this.memList = this.$route.params.memList
        // console.log(memList);
        console.log(memList);
    }
}

</script>
<style lang="less" scoped>
    
</style>