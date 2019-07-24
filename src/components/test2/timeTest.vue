<template>
	<div>
		<timeSelect v-model="value"></timeSelect>
		<el-button type="primary" @click="submit()">提交</el-button>
	</div>
</template>

<script>
	import timeSelect from './timeSelect.vue'
	export default {
		components: {
			timeSelect
		},
		data() {
			return {
				value:{
					"type":"date",
					"value":[new Date(),new Date()]
				}
			};
		},
		methods:{
			submit(){
				console.log("start="+JSON.stringify(this.value)+",end="+new Date(this.value.end_time))
			}
		}
	}
</script>

<style>

</style>
