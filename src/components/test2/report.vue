<template>
	<div __model='{}' __config='{"draggable":false}' __event='{}' __uid='46' __cid='100'>
		<div __name="aaa" name="aaa" __model='{"name":"aaa"}' __config='{"draggable":false}' __event='{}' __uid='50' __pid='46'
		 __cid='v-chart-search-placeholder'>
			<el-form :inline="true" :model="query0" class="demo-form-inline" style="margin-bottom:-15px;" __cid='224'>
				<el-form-item label="名称" __cid='225'>
					<el-input __cid='212' v-model="query0.student_name" placeholder="请输入名称"></el-input>
				</el-form-item>
				<el-form-item label="" __cid='225'>
				</el-form-item>
				<el-button type="primary" @click="exportData0">导出</el-button>
				<el-form-item label="创建时间" __cid='225'>
					<timeSelect v-model="query0.create_time"></timeSelect>
				</el-form-item>
				<el-button type="primary" @click="findAllReport0">查询</el-button>
			</el-form>
		</div>
		<v-chart __relation_search="aaa" :options="options_0" auto-resize relation-search="aaa" class="__uid_49" __model='{"options":{},"auto-resize":true,"relation-search":"aaa"}'
		 __config='{"draggable":false}' __event='{}' __uid='49' __pid='46' __cid='v-chart-placeholder'></v-chart>
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
				options_0: {
					title: {
						text: ''
					},
					tooltip: {
						trigger: 'axis'
					},
					legend: {
						data: []
					},
					xAxis: {
						data: []
					},
					yAxis: {},
					series: [{
						name: '成功数',
						type: 'bar',
						barWidth: '60%',
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				},
				query0: {
					"student_name": "",
					"create_time": {
						type: "date",
						value: [new Date(), new Date()]
					},
				},

			}
		},
		mounted() {
			this.findReportByConfig0();

		},
		methods: {
			findReportByConfig0() {
				let self = this;
				let requestConfig = {};
				requestConfig.config = {
					"alias_id": 0,
					"chart_type": "bar",
					"data_source_config": {
						"legend": "失败数",
						"data_config": "select name,fail value from test where name=?"
					},
					"multi_data": 1,
					"relation_search_name": "aaa",
					"title": "测试仪表盘",
					"x_data_source_config": {
						"data_config": "{\"type\":\"multi\",\"sql_value\":[{\"label\":\"按日SQL语句\",\"key\":\"date\",\"value\":\"select DATE_FORMAT(create_time,'%Y%m%d') name,count(student_name) value from t_student where 1=1 and student_name = ?  group by name;\"},{\"label\":\"按周SQL语句\",\"key\":\"week\",\"value\":\"select DATE_FORMAT(create_time,'%Y年第%u周') name,count(student_name) value from t_student where 1=1 and student_name like ? group by name;\"},{\"label\":\"按月SQL语句\",\"key\":\"month\",\"value\":\"select DATE_FORMAT(create_time,'%Y年第%m月') name,count(student_name) value from t_student where 1=1 and student_name like ? group by name;\"}]}",
						"x_is_sql": "1"
					},
					"y_data_source_config": [{
						"y_is_sql": "1",
						"legend": "成功数",
						"data_config": "{\"type\":\"multi\",\"sql_value\":[{\"label\":\"按日SQL语句\",\"key\":\"date\",\"value\":\"select DATE_FORMAT(create_time,'%Y%m%d') name,count(student_name) value from t_student where 1=1 and student_name = ? group by name;\"},{\"label\":\"按周SQL语句\",\"key\":\"week\",\"value\":\"select DATE_FORMAT(create_time,'%Y年第%u周') name,count(student_name) value from t_student where 1=1 and student_name like ? group by name;\"},{\"label\":\"按月SQL语句\",\"key\":\"month\",\"value\":\"select DATE_FORMAT(create_time,'%Y年第%m月') name,count(student_name) value from t_student where 1=1 and student_name like ? group by name;\"}]}"
					}]
				};
				requestConfig.params = self.query0;
				self.$axios
					.post("/api/v0.1/report_data", requestConfig)
					.then(function(response) {
						let message = response.data;
						let series = [];
						// 						message.y_data.forEach(function(item) {
						// 							let obj = {};
						// 							obj.name = item.legend;
						// 							obj.type = item.type;
						// 							obj.data = item.y_data;
						// 							series.push(obj);
						// 						});
						const newOptions = JSON.parse(JSON.stringify(self.options_0));
						newOptions.title.text = message.title;
						newOptions.legend.data = message.legend;
						newOptions.xAxis.data = message.x_data;
						if (newOptions.series && newOptions.series.length > 0) {
							newOptions.series.forEach((item) => {
								message.y_data.forEach((it) => {
									if (it.legend == item.name) {
										item.data = it.y_data;
									}
								});
							});
						}
						self.options_0 = newOptions;
					}).catch(function(error) {
						console.log(error);
					});
			},
			findAllReport0() {
				let self = this;
				self.findReportByConfig0();
			},
			exportData0() {
				window.location = "/api/v0.1/demo/test/export";
			},

		}
	}
</script>
<style scoped>
	.__uid_49 {
		width: 100%;
		height: 250px;
	}
</style>
