<template>
  <div>
    <el-button @click="handleClick">点我</el-button>
		<span>{{ sum }}</span><br/>
		<span>{{ average }}</span><br/>
		<span>{{ sortedMemList }}</span>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
		return {
			memList: [],
			payArr:[]
			
		};
  },
  computed: {
		sortedMemList(){
				let newArr = this.memList 
				return newArr.sort((e1,e2)=>{
					return parseFloat(e1.money)  - parseFloat(e2.money) 
				})
		},
		average(){
			let average = this.getAttribute(this.memList).average
			return average
		},
		sum(){
			let sum = this.getAttribute(this.memList).sum
			return sum
		}
	},
  methods: {
    handleClick() {
    
      console.log(this.memList);
		},
		getAttribute(objArr){
			let sum = 0
			let average = 0
			let obj = {}
			objArr.forEach(element => {
				sum = sum + parseInt(element.money)
			});
			average = sum / objArr.length
			obj.sum = sum
			obj.average = average.toFixed(2)
			return obj
		}
  },
  mounted() {
		this.memList = this.$route.params.memList;
		
  },
};
</script>
<style lang="less" scoped></style>
