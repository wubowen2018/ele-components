<template>
  <div>
      axios
  </div>
</template>

<script>
export default {
    name: 'axios',
    data() {
        return {

        }
    },
    mounted(){
        this.$axios.get('/api/info').then((res,err)=>{
            console.log(res);
        })
    }
}
</script>

<style>

</style>