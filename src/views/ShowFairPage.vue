<template>
  <div class="wraper">
		<div class="moneyThing" >
			<span class="totalMoney">共消费{{ sum }}元</span>
			<span class="averageMoney">平均消费{{ average }}元</span>
		</div>

		<div class="tipDiv">
			<label class="tipLabel">请按照如下表格操作</label>
		</div>

		<div class="tableDiv" v-if="payArr.length">
			<el-table
				:data="payArr"
				stripe
				style="width: 100%">
				<el-table-column
					prop="payer"
					label="付款人"
					width="180">
				</el-table-column>
				<el-table-column
					prop="rev"
					label="收款人"
					width="180">
				</el-table-column>
				<el-table-column
					prop="dit"
					label="金额">
				</el-table-column>
			</el-table>
		</div>
		<div class="tableDiv" v-else>
			<span class="JustAA">刚好AA</span>
		</div>

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
		average(){
			return this.getAttribute(this.memList).average
		},
		sum(){
			return this.getAttribute(this.memList).sum
		}
	},
  methods: {
    getAttribute(objArr){
			let sum = 0
			let average = 0
			let obj = {}
			objArr.forEach(element => {
				sum = sum + parseFloat(element.money)
			});
			average = sum / objArr.length
			obj.sum = sum.toFixed(2)
			obj.average = average.toFixed(2)
			return obj
		},
		sortArr(arr){
			let newArr = []
			Object.assign(newArr,arr)
			return newArr.sort((e1,e2)=>{
				return parseFloat(e1.money)  - parseFloat(e2.money) 
			})
		}
  },
  created() {
		this.memList = this.$route.params.memList
		let arrTmp = this.sortArr(this.memList)
		let average = this.average
		let payedArr = []

		if (arrTmp.length === 2){
			let dit = (average - arrTmp[0].money).toFixed(2) 
				dit!==0 && payedArr.push({
					payer:arrTmp[0].name,
					rev: arrTmp[1].name,
					dit: dit 
				})
		} else {
			let distributer =  arrTmp[0]
			let distributerDit = average - distributer.money
			let distributerName = distributer.name 
			arrTmp.splice(0,1)
			for (let index = 0; index < arrTmp.length; index++) {
				const element = arrTmp[index];
				let ditTmp = (average - parseFloat(element.money)).toFixed(2)
				Number(ditTmp) > 0 && payedArr.push({payer:element.name,rev:distributerName,dit: ditTmp })
					Number(ditTmp) < 0 &&payedArr.push({ payer:distributerName,rev:element.name,dit: ditTmp.toString().replace("-","")})
			}
		}
		this.payArr = payedArr
		console.log(payedArr);
  },
};
</script>
<style lang="less" scoped>
	.wraper{
		width: 500px;
		// position: relative;
	}
	.tableDiv{
		margin: 30px auto;
		text-align: center;
	}
	.moneyThing{
		width: 100%;
		height: 50px;
		font-size: 18px;
		text-align: center;
		margin-top: 30px;
		color: #595959;
	}
	.totalMoney,.averageMoney{
		width: 100px;
		margin: 50px;
	}
	.JustAA{
		width: 100%;
		font-size: 18px;
		text-align: center;
		color: #595959;
	}
	.tipDiv{
		width: 100%;
		height: 60px;
		font-size: 18px;
		text-align: center;
		color: #595959;
	}
	
</style>
